"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { List, X, ShoppingBag } from "@phosphor-icons/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const update = () => {
      const raw = localStorage.getItem("somni-cart");
      if (raw) {
        try { setCartCount(JSON.parse(raw).length); } catch { setCartCount(0); }
      }
    };
    update();
    window.addEventListener("cart-updated", update);
    return () => window.removeEventListener("cart-updated", update);
  }, []);

  const nav = [
    { label: "Shop", href: "/shop/visual" },
    { label: "Science", href: "/science" },
    { label: "Story", href: "/story" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled
          ? "bg-abyss/85 backdrop-blur-2xl border-b border-white/[0.04] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-cream hover:text-moonlight transition-colors duration-500"
        >
          SOMNI<span className="text-moonlight">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-xs uppercase tracking-[0.2em] text-cream/60 hover:text-cream transition-colors duration-300 py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-moonlight/50 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
          <Link
            href="/cart"
            className="relative text-cream/60 hover:text-cream transition-colors ml-2"
          >
            <ShoppingBag size={18} weight="light" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-moonlight text-abyss text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex md:hidden items-center gap-5">
          <Link href="/cart" className="relative text-cream/60">
            <ShoppingBag size={18} weight="light" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-moonlight text-abyss text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-cream/60 hover:text-cream transition-colors">
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-abyss/98 backdrop-blur-2xl border-t border-white/[0.04] px-8 py-10">
          <nav className="flex flex-col gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg uppercase tracking-[0.15em] text-cream/70 hover:text-cream transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
