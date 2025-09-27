"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { product } from "@/interfaces";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: product[] = await res.json();
        setProducts(data); 
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // filter + search + sort
  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [products]
  );

  const productsToShow = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") filtered = [...filtered].sort((a, b) => b.price - a.price);

    return filtered;
  }, [products, selectedCategory, sortOrder, searchTerm]);

  if (loading) return <p className="text-center py-10">Loading products...</p>;

  return (
    <div className="min-h-screen bg-white w-[95%] mx-auto">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">ALL PRODUCTS</h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Our complete collection of premium technology products
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="pb-10 px-4 mx-auto w-[95%]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-b px-4 py-2 w-full md:w-1/3 text-sm"
          />
          <div className="flex gap-6">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border-b px-4 py-2 text-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc" | "")}
              className="border-b px-4 py-2 text-sm"
            >
              <option value="">Sort by Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-18 px-4 mx-auto w-[95%]">
        <div className="max-w-7xl mx-auto">
          {productsToShow.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No products found matching your filters.</p>
          ) : (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {productsToShow.map((product) => (
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
                    <p className="text-xs font-light text-gray-500 mb-2 tracking-wider">{product.category.toUpperCase()}</p>
                    <h3 className="text-lg font-light mb-2">{product.name}</h3>
                    <p className="text-sm font-light text-gray-600 mb-2">{product.specs}</p>
                    <p className="text-lg font-light">R {product.price}</p>
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

export default ProductsPage;
