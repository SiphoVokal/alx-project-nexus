"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { product } from "@/interfaces"; 

const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // fetch phones from API
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const res = await fetch("/api/phones");
        const data = await res.json();
        setPhones(data);
      } catch (err) {
        console.error("Failed to fetch phones:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPhones();
  }, []);

  // filter + search + sort
  const productsToShow = useMemo(() => {
    let filtered = phones;

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [phones, searchTerm, sortOrder]);

  if (loading) return <p className="text-center py-10">Loading products...</p>;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
            PHONES
          </h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Latest iPhone collection with cutting-edge technology and premium
            design
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 px-4 w-[95%] mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search phones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-b px-4 py-2 w-full md:w-1/3 text-sm"
          />

          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "asc" | "desc" | "")
            }
            className="border-b px-4 py-2 text-sm"
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4 w-[95%] mx-auto">
        <div className="max-w-7xl mx-auto">
          {productsToShow.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              No phones found matching your filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {productsToShow.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group"
                >
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
                    <p className="text-sm font-light text-gray-600 mb-2">
                      {product.specs}
                    </p>
                    <p className="text-lg font-light">R{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PhonesPage;
