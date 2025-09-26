import { ProductData, product } from "@/interfaces";
import { productData } from "./productData";

// General listing cards
export const products: product[] = productData.map(p => ({
  id: p.id,
  name: p.name,
  price: p.price,
  image: p.images[0],
  category: p.category,
  specs: p.specs.slice(0,3).join(", "),
}));

// Featured products (first 4)
export const featuredProducts: product[] = productData.slice(0,4).map(p => ({
  id: p.id,
  name: p.name,
  price: p.price,
  image: p.images[0],
  category: p.category,
  specs: p.specs.slice(0,1).join(", "),
}));

// Laptops
export const laptopProducts: product[] = productData
  .filter(p => p.category === "Laptops")
  .map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0],
    category: p.category,
    specs: p.specs.slice(0,1).join(", "),
  }));

// Phones
export const phoneProducts: product[] = productData
  .filter(p => p.category === "Phones")
  .map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0],
    category: p.category,
    specs: p.specs.slice(0,3).join(", "),
  }));

// Accessories
  export const accessoryProducts: product[] = productData
  .filter(p => p.category === "Accessories")
  .map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0],
    category: p.category,
    specs: p.specs.slice(0,1).join(", "),
  }));
