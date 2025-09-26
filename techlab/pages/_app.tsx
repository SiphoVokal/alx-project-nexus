import "@/styles/globals.css";
import type { Metadata } from "next"
import type { AppProps } from "next/app";
import { CartProvider } from "@/contexts/cart-context";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "TECHlab - Premium Apple Reseller",
  description:
    "Discover premium Apple laptops, iPhones, and cutting-edge technology products with a minimalist shopping experience.",
  keywords: "Apple, MacBook, iPhone, technology, premium, electronics",
  openGraph: {
    title: 'My Site',
    description: "TECHlab - Premium Apple Reseller",
    siteName: "TECHlab",
    images: [{ url: "/logo.png" }]
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
        <Component {...pageProps} />
      <Footer />  
    </CartProvider>
  )  
}
