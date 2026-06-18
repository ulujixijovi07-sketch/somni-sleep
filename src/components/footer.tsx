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
      {/* Visa */}
      <span className="inline-flex items-center rounded-[3px] bg-white px-2 py-0.5" title="Visa">
        <svg viewBox="0 0 48 16" className="h-4 w-auto" fill="none">
          <rect width="48" height="16" rx="2" fill="white"/>
          <path d="M18.5 1H15l2.2 13.5h3.5L18.5 1z" fill="#1A1F71"/>
          <path d="M30 2.8c-2.5 0-4.2 1.3-4.2 3.2 0 1.4 1.2 2.2 2.2 2.6 1 .4 1.4.7 1.4 1.2 0 .6-.8 1-1.5 1-1 0-1.6-.2-2.4-.5l-.7-.2-.4 2.2c.8.3 2 .5 3.2.5 3 0 5-1.5 5-3.8 0-1.3-.8-2.2-2.5-3-1-.5-1.6-.9-1.6-1.4 0-.5.5-.9 1.5-.9.9 0 1.6.2 2.1.4l.3.1.4-2.2c-.6-.2-1.5-.4-2.4-.4zM34.5 2.5h-2.3c-.7 0-1.2.2-1.5.9l-4.2 10h3l.6-1.6h3.7l.3 1.6h2.7L34.5 2.5zm-1.8 6.8l1.5-4 1.5 4h-3zM11 2.5L8.2 14.3l-3.3-.7L2 4.4c-.2-.6-.3-.8-.7-1-.5-.3-1.2-.6-1.9-.7L2.8.5l2-.3 2.5 6.8L11 2.5z" fill="#1A1F71"/>
          <path d="M45 1h-2.2l-1.5 13.5h3.7L45 1z" fill="#F7A600"/>
        </svg>
      </span>

      {/* Mastercard */}
      <span className="inline-flex items-center rounded-[3px] bg-white px-2 py-0.5" title="Mastercard">
        <svg viewBox="0 0 48 16" className="h-4 w-auto">
          <rect width="48" height="16" rx="2" fill="white"/>
          <circle cx="20" cy="8" r="5.5" fill="#EB001B"/>
          <circle cx="28" cy="8" r="5.5" fill="#F79E1B" opacity="0.8"/>
          <circle cx="28" cy="8" r="5.5" fill="#F79E1B" opacity="0.8" style={{mixBlendMode:'screen'}}/>
        </svg>
      </span>

      {/* Amex */}
      <span className="inline-flex items-center rounded-[3px] bg-[#006FCF] px-2 py-0.5" title="American Express">
        <svg viewBox="0 0 48 16" className="h-4 w-auto" fill="white">
          <path d="M39.8 4.5L37 0h-2.5l2.6 4.3-2.8 4.7H37l3-4.5zM0 4.5L1.8 0h2.5L1.6 4.5 4.3 9.2H1.8L0 4.5z"/>
          <text x="2" y="15" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="white">AMEX</text>
        </svg>
      </span>

      {/* Apple Pay */}
      <span className="inline-flex items-center rounded-[3px] bg-black px-2 py-0.5" title="Apple Pay">
        <svg viewBox="0 0 48 16" className="h-4 w-auto" fill="white">
          <path d="M11.5 4c-.8 0-1.6.5-2 1.2v-1H7.4v7.4h2.2V8.2c0-1.4.7-2.2 1.8-2.2.4 0 .8.1 1.1.2l.3-2.1c-.4-.2-.9-.3-1.3-.3zM17.5 4c-1.2 0-2 .5-2.5 1.2v-1H13v7.4h2.2V8.2c.5-.8 1.2-1.2 2.2-1.2 1.3 0 2.1.8 2.1 2.2v2.4h2.2V8.8c0-1.9-1.3-3.1-3.2-3.1zM27 4.5L25 11h2.2l.4-1.2h2.3L30.2 11h2.3L30.5 4.5H27zm1.2 3.5l.8-2.2.8 2.2h-1.6zM37 4c-1.3 0-2.4.7-2.9 1.6v-1.1h-2v10h2.2V10c.5.9 1.6 1.6 2.9 1.6 2.3 0 4-1.8 4-3.8s-1.7-3.8-4.2-3.8zm-.4 5.8c-1.2 0-2.1-.7-2.5-1.4V5.6c.4-.7 1.3-1.2 2.3-1.2 1.7 0 2.6 1.2 2.6 2.8 0 1.5-.9 2.6-2.4 2.6z"/>
        </svg>
      </span>

      {/* Google Pay */}
      <span className="inline-flex items-center rounded-[3px] bg-white px-2 py-0.5 border border-gray-200" title="Google Pay">
        <svg viewBox="0 0 48 16" className="h-4 w-auto">
          <rect width="48" height="16" rx="2" fill="white"/>
          <path d="M15 7.2v1.5h2.5c-.1.7-.6 2.2-2.5 2.2-1.5 0-2.7-1.2-2.7-2.7S13.5 5.5 15 5.5c.9 0 1.5.3 2 .7l1-1C17 4.4 16.2 4 15 4c-2.6 0-4.7 2-4.7 4.6s2 4.8 4.7 4.8c2.7 0 4.5-1.9 4.5-4.6 0-.3 0-.6-.1-.9L15 7.2zm7.8-1.6c-1 0-1.8.4-2.4 1.2V4.5h-1.5v7.4h1.5V9c0-1 .4-1.7 1.4-1.7.3 0 .5 0 .7.1l.3-1.6c-.2 0-.4-.1-.6-.1zM28 8.2c0 1.5 1.1 2.6 2.7 2.6.8 0 1.6-.3 2.2-1l-1-1c-.3.4-.8.6-1.2.6-.9 0-1.5-.6-1.6-1.4h4v-.4c0-.5 0-1 .1-1.4 0-1.6-1.1-2.9-2.8-2.9-1.6 0-2.9 1.3-2.9 3zm5.1.5H30c.1-.8.7-1.4 1.6-1.4.8 0 1.4.6 1.4 1.4H33z" fill="#5F6368"/>
          <path d="M38.5 7.2h-3.3c.1-.8.6-1.4 1.5-1.4.5 0 1 .2 1.3.5l.7-.8c-.6-.5-1.3-.8-2.1-.8-1.7 0-3 1.3-3 2.9 0 1.7 1.4 2.9 3 2.9 1.5 0 2.7-1 2.7-2.8 0-.2 0-.4-.1-.5H38.5z" fill="#4285F4"/>
        </svg>
      </span>

      {/* PayPal */}
      <span className="inline-flex items-center rounded-[3px] bg-white px-2 py-0.5 border border-gray-200" title="PayPal">
        <svg viewBox="0 0 48 16" className="h-4 w-auto">
          <rect width="48" height="16" rx="2" fill="white"/>
          <path d="M8.5 2.5c.3 0 .5.1.7.3.2.2.3.5.3.8l-1 3.5H6.3l.4-2.5c0-.3.1-.6.3-.8.2-.2.5-.3.8-.3h.7zM12 4.3c.3 0 .5.1.7.2.2.1.3.3.3.5s-.1.5-.3.7L11 11.5H9l.6-3.8h1l-.2.7c.1-.2.3-.3.5-.4.2-.1.4-.2.6-.2h.5z" fill="#003087"/>
          <path d="M15 4.3c-.3 0-.6.1-.8.4-.1.2-.2.4-.2.6l-.9 5.7h-1.8l1.2-7.8h1.7l-.1.5c.2-.3.5-.5.8-.5h.5L15 4.3z" fill="#009CDE"/>
        </svg>
      </span>
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
