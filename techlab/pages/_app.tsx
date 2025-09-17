import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/contexts/cart-context";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
        <Component {...pageProps} />
      <Footer />  
    </CartProvider>
  )  
}
