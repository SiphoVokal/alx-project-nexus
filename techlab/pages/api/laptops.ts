import type { NextApiRequest, NextApiResponse } from "next";
import { productData } from "@/data/productData"; // your full dataset

// Filter laptops and shape them
const laptops = productData
  .filter((p) => p.category === "Laptops")
  .map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0], // only first image for grid
    category: p.category,
    specs: p.specs.slice(0, 3).join(", "), // short preview
  }));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(laptops);
}
