"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchOverlay } from "@/components/layout/search-overlay";
import { UserMenu } from "@/components/auth/user-menu";
import {
  ShoppingBag,
  List,
  X,
  Globe,
  SignOut,
  User,
  Package,
  MapPin,
  Gift,
  Heart,
  ChatCircle,
  CaretDown,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { useSession, signOut } from "next-auth/react";

const NAV_LINKS = [
  { label: "Shop", href: "/shop", hasDropdown: true },
  { label: "Science", href: "/science", hasDropdown: true },
  { label: "Reviews", href: "/reviews" },
  { label: "Activities", href: "/blog" },
  { label: "About", href: "/story", hasDropdown: true },
  { label: "FAQ", href: "/faq" },
  { label: "Partnerships", href: "/contact", hasDropdown: true },
];

const SHOP_DROPDOWN = [
  { label: "Shop All", href: "/shop" },
  { label: "Visual · LUX", href: "/shop/visual" },
  { label: "Auditory · SONUS", href: "/shop/auditory" },
  { label: "Tactile · TACTUS", href: "/shop/tactile" },
  { label: "Olfactory · OLFACIO", href: "/shop/olfactory" },
];

const SCIENCE_DROPDOWN = [
  { label: "The Science", href: "/science" },
  { label: "Blog", href: "/blog" },
];

const ABOUT_DROPDOWN = [
  { label: "Our Story", href: "/story" },
  { label: "Contact", href: "/contact" },
];

const PARTNERSHIPS_DROPDOWN = [
  { label: "Affiliate Program", href: "/contact" },
  { label: "Wholesale", href: "/contact" },
  { label: "Collaborations", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [scienceDropdownOpen, setScienceDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [partnershipsDropdownOpen, setPartnershipsDropdownOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const shopDropdownRef = useRef<HTMLDivElement>(null);
  const scienceDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const partnershipsDropdownRef = useRef<HTMLDivElement>(null);
  const { totalItems } = useCart();
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const isLoggedIn = status === "authenticated" && !!session?.user;

  const LOCALES = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
  ] as const;

  const currentLocale = pathname.split("/")[1] || "en";
  const currentLocaleLabel = LOCALES.find((l) => l.code === currentLocale)?.label || "English";

  const switchLocalePath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  // Close menus on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
      if (shopDropdownRef.current && !shopDropdownRef.current.contains(e.target as Node)) {
        setShopDropdownOpen(false);
      }
      if (scienceDropdownRef.current && !scienceDropdownRef.current.contains(e.target as Node)) {
        setScienceDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (partnershipsDropdownRef.current && !partnershipsDropdownRef.current.contains(e.target as Node)) {
        setPartnershipsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
    setScienceDropdownOpen(false);
    setAboutDropdownOpen(false);
    setPartnershipsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // ── Nav Link with optional dropdown ──
  const NavLink = ({
    label,
    href,
    hasDropdown,
    dropdownRef,
    isOpen,
    onToggle,
    items,
  }: {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownRef?: React.RefObject<HTMLDivElement | null>;
    isOpen?: boolean;
    onToggle?: () => void;
    items?: { label: string; href: string }[];
  }) => (
    <div ref={dropdownRef} className="relative">
      <div className="flex items-center gap-1">
        <Link
          href={href}
          className="font-body text-[13px] font-medium text-brand-light/75 hover:text-brand-light transition-colors"
          onClick={(e) => {
            if (hasDropdown && onToggle) {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          {label}
        </Link>
        {hasDropdown && (
          <button
            onClick={onToggle}
            aria-label={`Toggle ${label} menu`}
            className="text-brand-light/40 hover:text-brand-light transition-colors"
          >
            <CaretDown
              className={cn(
                "h-3 w-3 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
              weight="fill"
            />
          </button>
        )}
      </div>

      {hasDropdown && isOpen && items && (
        <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-white/10 bg-[#1A1A24]/98 backdrop-blur-xl py-2 shadow-2xl shadow-black/30">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-5 py-2.5 text-[13px] font-light text-brand-light/55 hover:text-brand-gold hover:bg-white/[0.04] transition-colors"
              onClick={() => onToggle?.()}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* ── Desktop Header Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#1A1A24]/85 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-[0.12em] text-brand-light shrink-0"
          >
            SOMNI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              label="Shop"
              href="/shop"
              hasDropdown
              dropdownRef={shopDropdownRef}
              isOpen={shopDropdownOpen}
              onToggle={() => {
                setShopDropdownOpen(!shopDropdownOpen);
                setScienceDropdownOpen(false);
                setAboutDropdownOpen(false);
                setPartnershipsDropdownOpen(false);
              }}
              items={SHOP_DROPDOWN}
            />
            <NavLink
              label="Science"
              href="/science"
              hasDropdown
              dropdownRef={scienceDropdownRef}
              isOpen={scienceDropdownOpen}
              onToggle={() => {
                setScienceDropdownOpen(!scienceDropdownOpen);
                setShopDropdownOpen(false);
                setAboutDropdownOpen(false);
                setPartnershipsDropdownOpen(false);
              }}
              items={SCIENCE_DROPDOWN}
            />
            <NavLink label="Reviews" href="/reviews" />
            <NavLink label="Activities" href="/blog" />
            <NavLink
              label="About"
              href="/story"
              hasDropdown
              dropdownRef={aboutDropdownRef}
              isOpen={aboutDropdownOpen}
              onToggle={() => {
                setAboutDropdownOpen(!aboutDropdownOpen);
                setShopDropdownOpen(false);
                setScienceDropdownOpen(false);
                setPartnershipsDropdownOpen(false);
              }}
              items={ABOUT_DROPDOWN}
            />
            <NavLink label="FAQ" href="/faq" />
            <NavLink
              label="Partnerships"
              href="/contact"
              hasDropdown
              dropdownRef={partnershipsDropdownRef}
              isOpen={partnershipsDropdownOpen}
              onToggle={() => {
                setPartnershipsDropdownOpen(!partnershipsDropdownOpen);
                setShopDropdownOpen(false);
                setScienceDropdownOpen(false);
                setAboutDropdownOpen(false);
              }}
              items={PARTNERSHIPS_DROPDOWN}
            />
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <SearchOverlay />

            {/* Language Selector */}
            <div ref={langMenuRef} className="relative hidden sm:block">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 rounded-full border border-white/[0.12] px-3 py-1.5 text-[12px] font-medium text-brand-light/70 hover:text-brand-light hover:border-white/25 transition-colors"
              >
                <Globe className="h-3 w-3" />
                {currentLocaleLabel}
                <CaretDown className="h-2.5 w-2.5 opacity-40" weight="fill" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 rounded-xl border border-white/10 bg-[#1A1A24]/98 backdrop-blur-xl py-1 shadow-xl">
                  {LOCALES.map((loc) => (
                    <Link
                      key={loc.code}
                      href={switchLocalePath(loc.code)}
                      onClick={() => setLangMenuOpen(false)}
                      className={cn(
                        "block px-4 py-2 text-[12px] transition-colors",
                        currentLocale === loc.code
                          ? "text-brand-gold font-medium"
                          : "text-brand-light/55 hover:text-brand-gold hover:bg-white/[0.04]"
                      )}
                    >
                      {loc.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Account */}
            <UserMenu />

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={`Cart with ${totalItems} items`}
              className="relative text-brand-light/70 hover:text-brand-light transition-colors"
            >
              <ShoppingBag className="h-5 w-5" weight="light" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-burgundy text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden relative h-6 w-6 text-brand-light/70 hover:text-brand-light transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300",
                  mobileMenuOpen ? "top-3 rotate-45" : "top-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 block h-[1.5px] bg-current transition-all duration-300",
                  mobileMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300",
                  mobileMenuOpen ? "top-3 -rotate-45" : "top-[18px]"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Fullscreen Overlay ── */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-[#0A0A0F]/97 backdrop-blur-3xl transition-all duration-500",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-2">
          {[...NAV_LINKS, ...SHOP_DROPDOWN.filter((s) => s.label !== "Shop All")].map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-display text-2xl font-light tracking-wide text-text-secondary hover:text-text-primary transition-all duration-700",
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: mobileMenuOpen ? `${150 + i * 60}ms` : "0ms" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-8 h-px w-12 bg-white/10" />

          {isLoggedIn ? (
            <>
              <Link
                href="/account"
                className={cn(
                  "font-body text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary transition-all duration-700",
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: mobileMenuOpen ? `${600}ms` : "0ms" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                My Account
              </Link>

              <div className="flex flex-col items-center gap-3 mt-2">
                {[
                  { label: "Orders", href: "/en/account/orders", icon: Package },
                  { label: "Addresses", href: "/en/account/addresses", icon: MapPin },
                  { label: "Gift Cards", href: "/en/account/gift-cards", icon: Gift },
                  { label: "Wishlist", href: "/en/account/wishlist", icon: Heart },
                  { label: "Contact Support", href: "/en/contact", icon: ChatCircle },
                ].map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 font-body text-xs font-medium uppercase tracking-wider text-text-secondary/70 hover:text-text-primary transition-all duration-700",
                      mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: mobileMenuOpen ? `${620 + idx * 20}ms` : "0ms" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </Link>
                ))}
              </div>

              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "flex items-center gap-2 font-body text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-brand-burgundy transition-all duration-700",
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: mobileMenuOpen ? `${750}ms` : "0ms" }}
              >
                <SignOut className="h-4 w-4" />
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/auth/signin"
              className={cn(
                "font-body text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary transition-all duration-700",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: mobileMenuOpen ? `${600}ms` : "0ms" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          )}

          {/* Mobile Language Switcher */}
          <div className="mt-6 flex gap-4">
            {LOCALES.map((loc) => (
              <Link
                key={loc.code}
                href={switchLocalePath(loc.code)}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "font-body text-xs font-medium tracking-widest transition-all duration-700",
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  currentLocale === loc.code ? "text-brand-gold" : "text-text-secondary hover:text-brand-gold"
                )}
                style={{ transitionDelay: mobileMenuOpen ? `${700}ms` : "0ms" }}
              >
                {loc.code.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
