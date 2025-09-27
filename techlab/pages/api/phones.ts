import type { NextApiRequest, NextApiResponse } from "next";
import { productData } from "@/data/productData"; // raw full product dataset

// Filter only phones and shape them
const phones = productData
  .filter((p) => p.category === "Phones")
  .map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    image: p.images[0], // only first image for listing
    category: p.category,
    specs: p.specs.slice(0, 3).join(", "), // short specs preview
  }));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(phones);
}
