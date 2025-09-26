"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Empty Cart */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-light tracking-wider mb-8">CAREERS</h1>
        <p className="text-lg font-light text-gray-600 mb-8">We currently have no vacant positions</p>
        <Button asChild className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm font-light tracking-wider">
          <Link href="/products">GO SHOPPING</Link>
        </Button>
      </div>
    </div>
  )
}

export default Careers