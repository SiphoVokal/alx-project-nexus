import Link from "next/link"
import Image from "next/image"
import { phoneProducts } from "@/data/products"


const PhonesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">PHONES</h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Latest iPhone collection with cutting-edge technology and premium design
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4 w-[95%] mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {phoneProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-[4/3] bg-gray-50 mb-6 overflow-hidden rounded-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <p className="text-xs font-light text-gray-500 mb-2 tracking-wider">
                    {product.category.toUpperCase()}
                  </p>
                  <h3 className="text-lg font-light mb-2">{product.name}</h3>
                  <p className="text-sm font-light text-gray-600 mb-2">{product.specs}</p>
                  <p className="text-lg font-light">R{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PhonesPage
