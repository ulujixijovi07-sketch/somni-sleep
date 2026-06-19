"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
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

// ─── localStorage as single source of truth ─────────────────────────────

const STORAGE_KEY = "somni-cart";

function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

// Broadcast changes to other tabs/route-segments
function broadcastCart() {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new Event("somni-cart-changed"));
  } catch {}
}

// ─── Context ────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextType | undefined>(undefined);

// ─── Provider ───────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize from localStorage on first render
  const [items, setItems] = useState<CartItem[]>(() => readCart());

  // Listen for cross-tab/segment changes
  useEffect(() => {
    const handler = () => setItems(readCart());
    window.addEventListener("somni-cart-changed", handler);
    // Also check on focus (user may have changed cart in another tab)
    window.addEventListener("focus", handler);
    return () => {
      window.removeEventListener("somni-cart-changed", handler);
      window.removeEventListener("focus", handler);
    };
  }, []);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
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

    const current = readCart();
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
    writeCart(next);
    broadcastCart();
    setItems(next);
  }, []);

  const removeFromCart = useCallback((variantId: number) => {
    const current = readCart();
    const next = current.filter((i) => i.variantId !== variantId);
    writeCart(next);
    broadcastCart();
    setItems(next);
  }, []);

  const updateQuantity = useCallback(
    (variantId: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(variantId);
        return;
      }
      const current = readCart();
      const next = current.map((i) =>
        i.variantId === variantId ? { ...i, quantity } : i
      );
      writeCart(next);
      broadcastCart();
      setItems(next);
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    writeCart([]);
    broadcastCart();
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
