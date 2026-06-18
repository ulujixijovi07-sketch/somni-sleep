import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WishlistProvider>
      <CartProvider>
        <AnnouncementBar />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </CartProvider>
    </WishlistProvider>
  );
}
