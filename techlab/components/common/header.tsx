"use client"

import Link from "next/link"
import Image from "next/image"
import { CartIcon } from "../ui/cart-icon"

export default function Header() {
    return (
      <nav className="border-b bg-gray-100 border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-light tracking-wider">
              <Image
               src={"/logo.png"}
               alt="logo"
               width={160}
               height={40}
              />
            </Link>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <Link href="/products" className="text-sm font-light hover:text-gray-600 transition-colors">
                  PRODUCTS
                </Link>
                <Link href="/laptops" className="text-sm font-light hover:text-gray-600 transition-colors">
                  LAPTOPS
                </Link>
                <Link href="/phones" className="text-sm font-light hover:text-gray-600 transition-colors">
                  PHONES
                </Link>
              </div>
              <CartIcon />
            </div>
          </div>
        </div>
      </nav>
    )
}