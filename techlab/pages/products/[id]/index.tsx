"use client"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"
import { productData } from "@/data/productData"

const ProductPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const product = productData.find(
    (p) => p.id === parseInt(id as string, 10)
  )
  
  const { dispatch } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
      },
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/products" className="inline-flex items-center text-sm font-light hover:text-gray-600 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          BACK TO PRODUCTS
        </Link>
      </div>

      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-gray-50 overflow-hidden rounded-md">
              <Image src={product.images[0]} alt={product.name} width={800} height={600} className="w-full h-full object-cover"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-50 overflow-hidden rounded-md">
                  <Image src={img} alt={`${product.name} ${i+2}`} width={400} height={300} className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-light text-gray-500 mb-2 tracking-wider">{product.category.toUpperCase()}</p>
              <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">{product.name}</h1>
              <p className="text-2xl font-light mb-6">R {product.price.toLocaleString()}</p>
            </div>

            <div>
              <h3 className="text-lg font-light mb-4 tracking-wide">SPECIFICATIONS</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, i) => (
                  <li key={i} className="text-sm font-light text-gray-600">• {spec}</li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Button onClick={addToCart} className="w-full bg-black text-white hover:bg-gray-800 py-4 text-sm font-light tracking-wider">
                ADD TO CART
              </Button>
              {added && (
                <div className="flex items-center justify-center text-green-600 text-sm font-light mt-2">
                  <CheckCircle className="w-4 h-4 mr-2"/> Added to cart
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage