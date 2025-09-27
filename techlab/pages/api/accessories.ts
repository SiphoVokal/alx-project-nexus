// pages/api/accessories.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { productData } from "@/data/productData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const accessories = productData
    .filter(p => p.category === "Accessories")
    .map(p => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.images[0], // single image for cards
      category: p.category,
      specs: p.specs.slice(0, 1).join(", "),
    }));

  res.status(200).json(accessories);
}
