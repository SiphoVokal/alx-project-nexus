"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export function CartIcon() {
  const { state } = useCart()

  return (
    <Link href="/cart" className="relative p-2 hover:text-gray-600 transition-colors">
      <ShoppingBag className="w-5 h-5" />
      {state.itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {state.itemCount}
        </span>
      )}
    </Link>
  )
}