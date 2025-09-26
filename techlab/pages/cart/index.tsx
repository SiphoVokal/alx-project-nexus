"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react"

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* Empty Cart */}
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-light tracking-wider mb-8">YOUR CART</h1>
          <p className="text-lg font-light text-gray-600 mb-8">Your cart is currently empty</p>
          <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm font-light tracking-wider">
            <Link href="/products">CONTINUE SHOPPING</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/products"
          className="inline-flex items-center text-sm font-light hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          CONTINUE SHOPPING
        </Link>
      </div>

      {/* Cart Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-light tracking-wider mb-12 text-center">YOUR CART</h1>

        <div className="space-y-8">
          {state.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-6 border-b border-gray-100 pb-8">
              <div className="w-24 h-24 bg-gray-50 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-xs font-light text-gray-500 mb-1 tracking-wider">{item.category}</p>
                <h3 className="text-lg font-light mb-2">{item.name}</h3>
                <p className="text-lg font-light">R{item.price}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-200">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="text-right">
                <p className="text-lg font-light">R{(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-light tracking-wide">TOTAL</span>
            <span className="text-2xl font-light">R{state.total}</span>
          </div>

          <Button
            asChild
            className="w-full bg-black text-white hover:bg-gray-800 py-4 text-sm font-light tracking-wider"
          >
            <Link href="/checkout">PROCEED TO CHECKOUT</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
