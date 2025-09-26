"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const About: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
        {/* Hero Section */}
      <section
        className="relative pt-42 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Overlay */}
        <div className="absolute" />
      </section>
      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-light tracking-wider mb-8 text-center">ABOUT US</h1>
        <h3 className="text-2xl text-center font-light mb-8">Who We Are</h3>
        <p className="text-lg font-light text-gray-600 mb-8">
          At TECHlab, we believe technology should be more than just tools
          — it should inspire creativity, fuel productivity, and connect people in meaningful ways. As a Premium Apple Reseller, 
          we’ve dedicated ourselves to bringing customers closer to the world of Apple with personalized service, trusted expertise, 
          and authentic passion for innovation.
        </p>
        <h3 className="text-2xl text-center font-light mb-8">Our Story</h3>
        <p className="text-lg font-light text-gray-600">
          TECHlab began with a simple vision: to create a place where people could not only buy Apple products but also truly experience them. 
          From our very first store, we set out to bridge the gap between technology and people by offering hands-on product experiences, 
          expert consultations, and a community hub where creativity thrives.<br/>
            
          Over the years, we’ve grown into a trusted destination for students, professionals, 
          creators, and businesses who rely on Apple products to power their dreams. 
          Every device we sell is more than just hardware — it’s a tool to shape the future.
        </p><br/>
        <p className="text-lg text-center font-bold text-gray-600">Welcome to TECHlab. Where technology meets inspiration.</p>
      </div>
        <Button asChild className="flex justify-self-center bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm font-light tracking-wider mb-8">
          <Link href="/products">GO SHOPPING</Link>
        </Button>
    </div>
  )
}

export default About
