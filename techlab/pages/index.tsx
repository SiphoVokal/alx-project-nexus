import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"

const featuredProducts = [
  {
    id: 1,
    name: "MacBook Pro 16-inch M4",
    price: 56999,
    image: "/Pro.jpeg?height=400&width=600",
    category: "Laptops",
  },
  {
    id: 2,
    name: "iPhone 16 Pro Max 1TB",
    price: 36999,
    image: "/iphone16.png?height=100&width=200",
    category: "Phones",
  },
  {
    id: 3,
    name: "MacBook Air 16-inch M4",
    price: 26999,
    image: "/mac.png?height=100&width=200",
    category: "Laptops",
  },
  {
    id: 4,
    name: "iPhone 17 Pro Max 2TB",
    price: 52499,
    image: "/iphone17.png?height=100&width=200",
    category: "Phones",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-10 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/1" />

          <div className="relative max-w-4xl mx-auto text-center text-grey-900">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-16">
           PREMIUM
          <br />
           TECHNOLOGY
          </h1>
          <p className="text-lg font-light mb-10 max-w-2xl mx-auto">
           Discover the latest in premium technology. A carefully curated collection of Apple devices and cutting-edge
           electronics.
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light tracking-wider text-center mb-16">FEATURED PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-[4/3] bg-gray-50 mb-6 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={100}
                    className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-500 "
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
  )
}
