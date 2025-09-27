"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      
      <footer className= "bg-gray-50 shadow-t-sm text-gray-900 p-6">
        <div className="max-w-7xl md:pl-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left side: Logo + description */}
          <section>
            <Link href={"/"}>
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={90}
                  height={30}
                />
              </div>
            </Link>
            <p className="text-sm">
              TECHlab is a Premium Apple Reseller dedicated to delivering the latest Apple products, 
              expert advice, and exceptional after-sales service. Whether you’re upgrading your device, 
              exploring accessories, or seeking technical support, we’re here to provide a seamless Apple experience.
            </p><br/>
            <p className="text-xs">
              Premium Reseller. Apple, the Apple logo, and other marks are trademarks of Apple Inc.
            </p>
          </section>

          {/* Right side: 3 list items */}
          <section className="grid grid-cols-1 md:grid-cols-3 md:pl-12">
            <div className="flex-1">
              <h3 className="text-lg mt-2 mb-3">SHOP</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="laptops" className="hover:text-gray-400">
                   Mac
                  </Link>
                </li>
                <li>
                  <Link href="phones" className="hover:text-gray-400">
                   iPhone
                  </Link>
                </li>
                <li>
                  <Link href="accessories" className="hover:text-gray-400">
                   Accessories
                  </Link>
                </li>
                <li>
                  <Link href="accessories" className="hover:text-gray-400">
                   Apple Watch 
                  </Link>
                </li>
              </ul>
            </div>
            
            <section className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex-1">
                <h3 className="text-lg mt-2 mb-3">COMPANY</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="stores" className="hover:text-gray-400">
                     Stores
                    </Link>
                  </li>
                  <li>
                    <Link href="careers" className="hover:text-gray-400">
                     Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="updates" className="hover:text-gray-400">
                     Updates
                    </Link>
                  </li>
                  <li>
                    <Link href="about" className="hover:text-gray-400">
                     About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex-1">
                <h3 className="text-lg mt-2 mb-3">SUPPORT</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/" className="hover:text-gray-400">
                     Repairs
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-gray-400">
                     Returns
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-gray-400">
                     Trade-in
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-gray-400">
                     Deliveries
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs">
          © 2025 ALX Project Nexus. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
