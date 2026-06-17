import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import { BackToTop } from "@/components/back-to-top";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WishlistProvider>
      <CartProvider>
        <AnnouncementBar />
        <Header />
        <main className="pt-24 animate-fade-in">{children}</main>
        <Footer />
        <BackToTop />
      </CartProvider>
    </WishlistProvider>
  );
}
