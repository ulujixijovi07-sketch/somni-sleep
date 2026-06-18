"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PaperPlaneTilt,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  FacebookLogo,
  WhatsappLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

// ─── Navigation Data ──────────────────────────────────────────────────

const COMPANY_LINKS = [
  { label: "About Us", href: "/story" },
  { label: "The Science", href: "/science" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const POLICY_LINKS = [
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Payment Methods", href: "/payment-methods" },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Track Your Order", href: "/track-order" },
  { label: "FAQ", href: "/faq" },
  { label: "Affiliate & Collab", href: "/affiliate-collab" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/somni.sleep", icon: InstagramLogo },
  { label: "TikTok", href: "https://tiktok.com/@somni.sleep", icon: TiktokLogo },
  { label: "YouTube", href: "https://youtube.com/@somnisleep", icon: YoutubeLogo },
  { label: "Facebook", href: "https://facebook.com/somnisleep", icon: FacebookLogo },
  { label: "LinkedIn", href: "https://linkedin.com/company/somnisleep", icon: LinkedinLogo },
];

const PAYMENT_METHODS = [
  {
    name: "Visa",
    viewBox: "0 0 48 16",
    path: "M18.5 16H15l2.2-13.5h3.5L18.5 16zM30 2.8c-.7-.3-1.8-.5-3.2-.5-3.5 0-6 1.9-6 4.5 0 2 1.8 3.1 3.1 3.7 1.4.6 1.9 1.1 1.9 1.7 0 1-1.1 1.4-2.1 1.4-1.4 0-2.2-.2-3.3-.7l-.5-.2-.5 3c.8.4 2.3.7 3.9.7 3.8 0 6.2-1.9 6.3-4.7 0-1.6-1-2.8-3-3.8-1.3-.6-2-1-2-1.7 0-.6.6-1.2 2-1.2 1.1 0 2 .3 2.6.5l.3.1.5-2.8zM37 2.5h-2.7c-.9 0-1.5.3-1.9 1.1l-5.4 12.9h3.8l.8-2.1h4.7l.4 2.1h3.4L37 2.5zm-2.3 8.6l1.9-5.3 1.1 5.3h-3zM11 2.5L8.2 14.3l-3.3-.7-3.1-9.7c-.2-.7-.4-1-.9-1.3C0 2-.9 1.4 0 1.3L3.5.5 6.9 0l2.5 14.8L11 2.5z",
    bg: "bg-[#1A1F71]",
  },
  {
    name: "Mastercard",
    viewBox: "0 0 48 16",
    path: "M28 13.5V2.5h-4v11h4zm9.3-8.4c-1.2 0-2.3.6-3 1.5V2.8h-3.6v13.2h3.6v-5.8c0-2.3 1.2-3.4 3-3.4.4 0 .8 0 1.2.1l.7-3.5c-.6-.2-1.3-.3-1.9-.3zm-15.5 8.3c-2.3 0-3.8-1.2-3.8-3V5.6h3.5v4.2c0 .8.4 1.2 1.3 1.2.5 0 1-.3 1.3-.6V5.6h3.6v7.3c-.1.1-.6.4-1.5.7-.6.2-1.5.3-2.2.3-.6 0-1.4-.1-2.2-.4zM48 5.6h-2.9l-2 7.3-2.2-7.3h-3l2.7 9.2h3.5L48 5.6zM5.6 3.1L3.7 13.1H0L2.3 2.8h1.8c.7 0 1.2.2 1.5.3zM13 2.8H9.7c-.4 0-.7.3-.7.6l-2.4 12.7H10l.8-4.3h1.8c2.7 0 4.1-1.1 4.7-3.2.5-1.8-.2-3.2-1.1-4-.8-.8-1.9-1.2-3.2-1.2v1.6c1 0 1.7.3 2.2.8.6.5.8 1.3.5 2.2-.4 1.3-1.4 1.9-3 1.9h-2.4L13 2.8z",
    bg: "bg-[#EB001B]",
  },
  {
    name: "Amex",
    viewBox: "0 0 48 16",
    path: "M39.8 4.5L37 0h-2.5l2.6 4.3-2.8 4.7H37l3-4.5zM0 4.5L1.8 0h2.5L1.6 4.5 4.3 9.2H1.8L0 4.5zm11.4 4.7l-1-3.2c-.1-.4-.2-.6-.5-.8-.3-.2-.8-.3-1.3-.3H6.5v1.3h1.8c.2 0 .3 0 .4.1.1.1.2.3.2.5v.8H6.3c-1.6 0-2.7.6-2.7 1.9 0 .8.5 1.5 1.3 1.9.4.2.9.3 1.4.3.9 0 1.8-.4 2.4-1v.8h2.7V9.2zm-2.7-.8v1.7c-.3.5-.9.8-1.5.8-.3 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.8 0-.7.6-1.2 1.7-1.2h1v-.2zm9.3-1.8C16.8 6.2 15.6 5.8 14.5 6.4c-.8.4-1.4 1.2-1.4 2.1 0 .9.5 1.7 1.3 2.1.6.3 1.4.3 2.2.3.7 0 1.3-.1 1.9-.4l-.3-1.2c-.5.3-1 .5-1.6.5-.4 0-.8-.1-1.1-.3-.3-.2-.5-.5-.5-.9h3.9v-.4c0-1.1-.5-2.1-1.6-2.7zm-1.5 1.9c.3-.5.9-.7 1.4-.7.5 0 .9.2 1.2.5.2.2.2.4.2.6h-3.3c.1-.2.2-.3.5-.4zm9.9 2.9l-.6-1.6h-2.1l-.6 1.6h-2.2l2.8-6.7h2.2l2.8 6.7h-2.3zm-2.4-2.8h1.7l-.9-2.4-.8 2.4zm10.1 2.8V2.5h-2.1v6.4l-3-6.4h-2.5v6.7h2.1V3.5l3.1 5.7h2.4z",
    bg: "bg-[#006FCF]",
  },
  {
    name: "Apple Pay",
    viewBox: "0 0 48 16",
    path: "M10.3 5.2c.5-.6 1-1.3 1-2.4 0-1.6-1.2-2.7-2.7-2.7H3.4v10.5h2.3V7.7h2.3l2 2.9h2.6L10.3 5.2zM5.7 4.2h2.9c.6 0 1.1.5 1.1 1.2 0 .7-.5 1.2-1.1 1.2H5.7V4.2zm9.9-1.7c-1.4 0-2.3.8-2.8 1.4v-1H11v10.5h2.2V9.7c.5.6 1.3 1.2 2.7 1.2 2.1 0 3.7-1.6 3.7-4.2s-1.6-4.2-4-4.2zm-.3 6.3c-1.1 0-2-.5-2.5-1.3V5.4c.5-.8 1.4-1.2 2.4-1.2 1.7 0 2.7 1.2 2.7 2.8 0 1.6-1 2.8-2.6 2.8zM24 6.3V2.5h-2.2v3.7c0 1.1-.6 1.8-1.5 1.8-.9 0-1.6-.6-1.6-1.7V2.5h-2.2v4.2c0 2 1.3 3.5 3.2 3.5 1.5 0 2.7-.7 3.2-1.9l.4 1.6h2V2.5h-2.1l-.2 1.5c-.5-1.1-1.8-1.7-3-1.7-2.5 0-4.5 1.9-4.5 4.3 0 2.5 2 4.4 4.6 4.4 1.2 0 2.4-.5 3.1-1.5.6 1 1.4 1.3 2.4 1.3.8 0 1.5-.2 2.1-.6l-.5-1.5c-.4.2-.8.4-1.3.4-.9 0-1.3-.5-1.3-1.8zm11.3-2.9h-4.7c.1-1.2.9-2.1 2.2-2.1.7 0 1.4.3 1.9.8l1-1.2c-.9-.8-1.9-1.2-3.1-1.2-2.5 0-4.4 1.9-4.4 4.2 0 2.5 2 4.3 4.3 4.3 2.2 0 3.9-1.5 3.9-4.1 0-.3 0-.5-.1-.7zM33.1 7c0-1.3.9-2.2 2.2-2.2 1.2 0 2.2.9 2.3 2.2h-4.5z",
    bg: "bg-white",
    dark: true,
  },
  {
    name: "Google Pay",
    viewBox: "0 0 48 16",
    path: "M15.9 6.6v2.2h3.6c-.1 1.1-.9 3.3-3.6 3.3-2.2 0-3.9-1.8-3.9-4 0-2.2 1.8-4 3.9-4 1.2 0 2.1.5 2.8 1l1.5-1.5c-1.1-1-2.4-1.5-4.3-1.5C8.4 2 5 5.3 5 9.5S8.6 17 13 17c4.6 0 7.7-3.2 7.7-7.8 0-.5-.1-1-.2-1.4L15.9 6.6zm11.3-2.3c-1.4 0-2.6.5-3.5 1.8V4.3h-2.1v11.3h2.2V9.3c0-1.5.6-2.6 2.1-2.6.3 0 .7 0 1 .1L27.5 5c-.1 0-.3-.1-.5-.1zM30 9.5c0 2.2 1.7 3.8 3.9 3.8 1.1 0 2.3-.4 3.2-1.5l-1.5-1c-.4.5-1.2.9-1.8.9-1.2 0-2.1-.9-2.3-2h5.8v-.5c0-.7.1-1.4.1-2 0-2.4-1.6-4.2-4.1-4.2-2.3 0-4.2 1.8-4.2 4.5h.9zM34 7.2c1.2 0 2 .8 2.1 2.1h-4.4c.2-1.2 1-2.1 2.3-2.1zM44.6 7.7l-1.9-5h-2.3l2.9 7.1-.1.1c-.4 1.2-1 1.6-2 1.6-.3 0-.7 0-1-.1v1.7c.2.1.7.1 1.1.1 1.7 0 2.9-.9 3.7-2.6l3.3-7.9h-2.4l-1.3 3.3v-.3z",
    bg: "bg-white",
    dark: true,
  },
  {
    name: "PayPal",
    viewBox: "0 0 48 16",
    path: "M9.7 4.1C9.2 4.1 8.7 4.3 8.4 4.7c-.3.3-.5.8-.5 1.3L6.5 14H4.1L5.1 8c0-.9-.1-1.6-.1-2.1h2.1L7 7.1c.4-.8 1.1-1.2 2-1.2h1.2L9.7 4.1zm-3.1 3H4.2c-.6 0-1.1.4-1.2.9L1.7 14H0l1.4-8.1h2c.5 0 1 .4 1.1.9l.2 1.6c.1-.5.5-.9 1-.9h.3l-.1-.6zm8.3-1.7c-.6 0-1.2.2-1.6.7-.3.4-.5.9-.4 1.4l2 .6c.9.3 1.3.9 1.3 1.7-.1 1.2-1.2 2.2-2.8 2.2-.8 0-1.6-.3-2.2-.7l.5-1.5c.5.4 1.1.6 1.7.6.7 0 1.2-.4 1.2-.9 0-.4-.2-.7-.8-.9l-1.9-.6c-.8-.2-1.3-.9-1.2-1.7.1-1.1 1-2 2.5-2 .7 0 1.4.2 1.9.6l-.5 1.4c-.4-.3-.8-.5-1.3-.6l.2.1zm5.6 0c-.7 0-1.3.3-1.7.8V5.5h-2.1l-1.1 6.5c0 .1.8.1 1.3.1.4 0 .7 0 1-.1L19 5.9h.1c.5 0 .9-.2 1.3-.5.2-.2.3-.5.3-.8-.1-.4-.4-.7-.8-.8h-.4v.1zm4.8 0c-.6 0-1.1.3-1.4.8l-.8 4.6h2.2l.5-3c0-.1.2-.3.4-.5.1-.1.4-.2.7-.2h.4l.2-1.5c-.2-.1-.5-.1-.8-.1l-.4-.1zM30.9 7c-.7 0-1.2.5-1.3 1.2l-.3 1.7c.1-.3.4-.5.9-.5.4 0 .8.2 1 .5.3.3.4.7.4 1.1 0 .9-.5 1.9-1.7 1.9-.9 0-1.6-.7-1.6-1.6 0-.1 0-.2.1-.4-.1-.6.3-1.2.9-1.6.2-.1.4-.2.6-.2.3 0 .6.1.9.3l.3-.4c-.2-.3-.5-.5-.9-.5-.3 0-.5.1-.7.2 0 0-.9.3-1 1.1V14H25l.4-2.3h1.2c-.1.5-.2 1.1-.1 1.5h.2c.4-.2.7-.6 1-1.1-.1-.4.1-.8.4-1.1h-.2z",
    bg: "bg-[#003087]",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.15em] text-brand-light/60">
      {children}
    </h3>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block py-1.5 text-[13px] font-light text-brand-light/45 hover:text-brand-gold transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

// ─── Main Footer ──────────────────────────────────────────────────────

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then(() => setSubscribed(true))
      .catch(() => {});
  };

  return (
    <footer style={{ backgroundColor: "#0A0A0F" }}>
      {/* ── Top Section: Logo + Payment Icons ── */}
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-light tracking-[0.15em] text-brand-light"
          >
            SOMNI
          </Link>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center gap-1.5">
            {PAYMENT_METHODS.map((pm) => (
              <span
                key={pm.name}
                className={`inline-flex items-center rounded-[3px] px-1.5 py-0.5 ${
                  pm.dark ? "bg-white/90" : `${pm.bg}`
                }`}
                title={pm.name}
              >
                <svg viewBox={pm.viewBox} className={`h-4 w-auto ${pm.dark ? "text-black" : "text-white"}`} fill="currentColor">
                  <path d={pm.path} />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mid Section: Newsletter + Navigation ── */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Newsletter (spans 2 cols on desktop) */}
          <div className="lg:col-span-2">
            <p className="font-display text-lg italic font-light text-brand-light/70 mb-4">
              Sleep Science. Engineered.
            </p>

            {subscribed ? (
              <p className="text-sm text-brand-gold font-medium">
                ✓ You&apos;re on the list. Welcome.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full rounded-full bg-white/[0.06] border border-white/[0.08] px-5 py-3 pr-12 text-sm text-brand-light placeholder:text-brand-light/25 focus:outline-none focus:border-brand-gold/40 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold hover:bg-brand-gold/30 transition-colors"
                >
                  <PaperPlaneTilt className="h-3.5 w-3.5" weight="fill" />
                </button>
              </form>
            )}

            <p className="mt-3 text-[11px] text-brand-light/25">
              We care about protecting your data. Read our{" "}
              <Link href="/privacy-policy" className="underline hover:text-brand-gold transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Our Company */}
          <div>
            <ColumnTitle>Our Company</ColumnTitle>
            <nav className="flex flex-col">
              {COMPANY_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>
          </div>

          {/* Shop Policy */}
          <div>
            <ColumnTitle>Shop Policy</ColumnTitle>
            <nav className="flex flex-col">
              {POLICY_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <ColumnTitle>Support</ColumnTitle>
            <nav className="flex flex-col">
              {SUPPORT_LINKS.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </nav>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-14 pt-8 border-t border-white/[0.06]">
          <ColumnTitle>Social</ColumnTitle>
          <div className="flex flex-wrap items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-2 text-[13px] font-light text-brand-light/45 hover:text-brand-gold transition-colors duration-200"
              >
                <link.icon className="h-4 w-4" weight="light" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.04]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-6 lg:flex-row lg:justify-between lg:px-8">
          <p className="text-[11px] font-light text-brand-light/20">
            &copy; {new Date().getFullYear()} SOMNI. All rights reserved. CE Certified.
          </p>

          {/* WhatsApp-style contact */}
          <div className="flex items-center gap-2.5 rounded-full bg-white/[0.04] px-4 py-2">
            <WhatsappLogo className="h-3.5 w-3.5 text-green-400" weight="fill" />
            <span className="text-[11px] font-light text-brand-light/40">
              +1 (555) 123-4567
            </span>
          </div>

          <p className="text-[10px] font-light text-brand-light/15">
            SSL Encrypted · Your data is always protected
          </p>
        </div>
      </div>
    </footer>
  );
}
