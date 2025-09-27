import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/data/products";
import HeroDesktop from "@/public/hero-bg.png";
import HeroMobile from "@/public/iphone17pro.png";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        {/* Mobile Hero Image */}
        <Image
          src={HeroMobile}
          alt="Hero Mobile"
          fill
          className="object-cover block md:hidden"
        />

        {/* Desktop Hero Image */}
        <Image
          src={HeroDesktop}
          alt="Hero Desktop"
          fill
          className="object-cover hidden md:block"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/15 md:bg-black/10" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-grey-900 px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-50 md:mb-16">
            PREMIUM
            <br />
            TECH RESELLER
          </h1>
          <p className="hidden md:block text-lg font-light mb-6 md:mb-10 max-w-2xl mx-auto">
            Discover the latest in premium technology. A carefully curated collection of Apple devices and cutting-edge electronics.
          </p>
          <Button
            asChild
            className="bg-gray-900 text-white hover:bg-gray-600 px-8 py-3 text-sm font-light tracking-wider"
          >
            <Link href="/products">EXPLORE COLLECTION</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-18 px-4 w-[95%] mx-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light tracking-wider text-center mb-16">
            FEATURED PRODUCTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-[4/3] bg-gray-50 mb-6 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-light text-gray-500 mb-2 tracking-wider">
                    {product.category.toUpperCase()}
                  </p>
                  <h3 className="text-lg font-light mb-2">{product.name}</h3>
                  <p className="text-sm font-light">R {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
