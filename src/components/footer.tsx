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

// ─── Payment Badges ───────────────────────────────────────────────────

function PaymentBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <img src="/images/payments/visa.png" alt="Visa" className="h-5 w-auto rounded-[3px]" />
      <img src="/images/payments/mastercard.png" alt="Mastercard" className="h-5 w-auto rounded-[3px]" />
      <img src="/images/payments/amex.png" alt="Amex" className="h-5 w-auto rounded-[3px]" />
      <img src="/images/payments/apple-pay.png" alt="Apple Pay" className="h-5 w-auto rounded-[3px]" />
      <img src="/images/payments/google-pay.png" alt="Google Pay" className="h-5 w-auto rounded-[3px]" />
      <img src="/images/payments/paypal.png" alt="PayPal" className="h-5 w-auto rounded-[3px]" />
    </div>
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
          <PaymentBadges />
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
