"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// ─── Types ──────────────────────────────────────────────────────────────

export type CartItem = {
  variantId: number;
  productId: number;
  name: string;
  slug: string;
  image: string;
  color: string;
  colorHex: string;
  size: string;
  price: number;
  quantity: number;
};

export type AppliedPromo = {
  code: string;
  type: string;
  value: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (variantId: number) => void;
  updateQuantity: (variantId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  promoCode: AppliedPromo | null;
  promoError: string | null;
  promoLoading: boolean;
  applyPromoCode: (code: string) => Promise<void>;
  removePromoCode: () => void;
  discount: number;
  total: number;
};

// ─── localStorage helpers ───────────────────────────────────────────────

const STORAGE_KEY = "somni-cart";

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

// ─── Cart store (module-level, survives route segment remounts) ─────────

let _items: CartItem[] = [];
let _listeners: Set<() => void> = new Set();

function getItems(): CartItem[] {
  return _items;
}

function setItems(newItems: CartItem[]) {
  _items = newItems;
  saveCart(_items);
  _listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  _listeners.add(fn);
  return () => { _listeners.delete(fn); };
}

// ─── Context ────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextType | undefined>(undefined);

// ─── Provider ───────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setReactItems] = useState<CartItem[]>(() => {
    // Initialize from localStorage on first render
    return loadCart();
  });

  // Sync module-level store with React state
  // This ensures all CartProvider instances share the same data
  useState(() => {
    const loaded = loadCart();
    if (loaded.length > 0 && items.length === 0) {
      setReactItems(loaded);
    }
  });

  // Subscribe to external changes (from other route segments)
  useState(() => {
    const unsub = subscribe(() => {
      setReactItems([...getItems()]);
    });
    return unsub;
  });

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    // GA4 add_to_cart event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "add_to_cart", {
        currency: "USD",
        value: item.price,
        items: [{
          item_id: item.productId,
          item_name: item.name,
          item_variant: `${item.color} / ${item.size}`,
          price: item.price,
        }],
      });
    }

    const current = getItems();
    const existing = current.find((i) => i.variantId === item.variantId);
    let next: CartItem[];
    if (existing) {
      next = current.map((i) =>
        i.variantId === item.variantId
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
    } else {
      next = [...current, { ...item, quantity: 1 }];
    }
    setItems(next);
  }, []);

  const removeFromCart = useCallback((variantId: number) => {
    const current = getItems();
    setItems(current.filter((i) => i.variantId !== variantId));
  }, []);

  const updateQuantity = useCallback(
    (variantId: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(variantId);
        return;
      }
      const current = getItems();
      setItems(
        current.map((i) =>
          i.variantId === variantId ? { ...i, quantity } : i
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  // ── Promo code ──────────────────────────────────────────────────────

  const [promoCode, setPromoCode] = useState<AppliedPromo | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [promoLoading, setPromoLoading] = useState(false);

  const applyPromoCode = useCallback(async (code: string) => {
    setPromoLoading(true);
    setPromoError(null);
    try {
      const res = await fetch("/api/promo/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, subtotal }),
      });
      const data = await res.json();
      if (data.valid) {
        setPromoCode({ code: data.code, type: data.type, value: data.value });
      } else {
        setPromoError(data.reason ?? "Invalid promo code.");
        setPromoCode(null);
      }
    } catch {
      setPromoError("Failed to validate promo code.");
      setPromoCode(null);
    } finally {
      setPromoLoading(false);
    }
  }, [subtotal]);

  const removePromoCode = useCallback(() => {
    setPromoCode(null);
    setPromoError(null);
  }, []);

  const discount = useMemo(() => {
    const bulkDiscount =
      totalItems >= 3 ? Math.round(subtotal * 0.2 * 100) / 100 : 0;
    let promoDiscount = 0;
    if (promoCode) {
      if (promoCode.type === "percentage") {
        promoDiscount =
          Math.round((promoCode.value / 100) * subtotal * 100) / 100;
      } else {
        promoDiscount = promoCode.value;
      }
    }
    const afterBulk = subtotal - bulkDiscount;
    if (promoDiscount > 0 && promoCode?.type === "percentage") {
      return (
        bulkDiscount +
        Math.round((promoCode.value / 100) * afterBulk * 100) / 100
      );
    }
    return bulkDiscount + promoDiscount;
  }, [promoCode, subtotal, totalItems]);

  const total = useMemo(
    () => Math.max(0, subtotal - discount),
    [subtotal, discount]
  );

  const value = useMemo<CartContextType>(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      promoCode,
      promoError,
      promoLoading,
      applyPromoCode,
      removePromoCode,
      discount,
      total,
    }),
    [
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      promoCode,
      promoError,
      promoLoading,
      applyPromoCode,
      removePromoCode,
      discount,
      total,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// ─── Hook ───────────────────────────────────────────────────────────────

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
