"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SHOP_LINKS = [
  { label: "Shop All", href: "/shop" },
  { label: "Visual / LUX", href: "/shop/visual" },
  { label: "Auditory / SONUS", href: "/shop/auditory" },
  { label: "Tactile / TACTUS", href: "/shop/tactile" },
  { label: "Olfactory / OLFACIO", href: "/shop/olfactory" },
];

const INFO_LINKS = [
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "Track Order", href: "/en/order/tracking" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const [socialLinks, setSocialLinks] = useState([
    { label: "Instagram", href: "https://instagram.com/somni.sleep" },
    { label: "TikTok", href: "https://tiktok.com/@somni.sleep" },
    { label: "Pinterest", href: "https://pinterest.com/somnisleep" },
  ]);

  useEffect(() => {
    fetch("/api/site-settings?key=social_links")
      .then(r => r.json())
      .then(d => { if (d?.value) { try { const arr = JSON.parse(d.value); if (arr.length > 0) setSocialLinks(arr); } catch {} } })
      .catch(() => {});
  }, []);

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-brand-light">
      {children}
    </h3>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block py-1 font-body text-[13px] font-light text-brand-light/50 hover:text-brand-gold transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

  return (
    <footer style={{ backgroundColor: "var(--bg-dark)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {/* Column 1: Shop */}
          <div>
            <ColumnTitle>Shop</ColumnTitle>
            <nav className="flex flex-col">
              {SHOP_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>
          </div>

          {/* Column 2: Info + Social */}
          <div>
            <ColumnTitle>Info</ColumnTitle>
            <nav className="flex flex-col mb-8">
              {INFO_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>

            {/* Social */}
            <div className="flex items-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-brand-light/40 hover:text-brand-gold transition-colors duration-200"
                >
                  <span className="font-medium text-xs uppercase tracking-wider">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 lg:flex-row lg:justify-between lg:px-8">
          <p className="font-body text-[12px] font-light text-brand-light/20">
            &copy; {new Date().getFullYear()} SOMNI. All rights reserved.
          </p>
          <p className="font-body text-[11px] font-light text-brand-light/20">
            SSL Encrypted. Your data is always protected
          </p>
        </div>
      </div>
    </footer>
  );
}
