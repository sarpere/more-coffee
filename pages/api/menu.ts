// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { menuTypes } from "../../types";
type Data = menuTypes.menuItem[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { name: "Ana yemek", image: "assets/yemek.webp", url: "/yemek" },
    {
      name: "Sıcak Kahve",
      image: "assets/sicak_kahve.webp",
      url: "/sicak-kahve",
    },
    {
      name: "Socuk Kahve",
      image: "assets/soguk_kahve.webp",
      url: "/soguk-kahve",
    },
    { name: "Tatlı", image: "assets/tatli.webp", url: "/tatli" },
    { name: "Soft içecekler", image: "assets/soft.webp", url: "/soft-icecek" },
  ]);
}
