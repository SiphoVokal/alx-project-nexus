"use client"

import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"

const CheckoutPage: React.FC = () => {
  const { state } = useCart()  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now just log it (later connect Stripe/PayPal/etc.)
    console.log("Payment submitted:", formData)
    alert("Payment submitted (demo). Integrate Stripe/PayPal for real payments.")
  }

  return (
    <div className="max-w-4xl mx-auto bg-white px-4 py-12">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-light tracking-wide mb-8 text-center">CHECKOUT</h1>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-light">Items in Cart</span>
            <span className="text-sm font-medium">{state.items.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-light">Total</span>
            <span className="text-lg font-medium">R{state.total}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Info */}
          <div>
            <label className="block text-sm font-light mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-light mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
          </div>

          {/* Payment Info */}
          <div>
            <label className="block text-sm font-light mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-light mb-1">Expiry</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-light mb-1">CVC</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="123"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 py-3 text-sm font-light tracking-wider"
          >
            Pay Now
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CheckoutPage
