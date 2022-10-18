// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { menuTypes } from "../../../types";
type Data = menuTypes.menuItem[] | menuTypes.categoryList[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let response = yemek;
  switch (req.query.category) {
    case "sicak-kahve":
      response = sicakKahve;
      break;
    case "soguk-kahve":
      response = sogukKahve;
      break;
    case "soft-icecek":
      response = softIcecek;
      break;
    default:
      response = yemek;
      break;
  }
  if (req.query.category) {
    res.status(200).json(response);
    return;
  }
  res.status(200).json(categories);
}
const categories = [
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
];

const yemek = [
  {
    name: "makarna 1",
    price: "50TL",
  },
  {
    name: "makarna 2",
    price: "55TL",
  },
  {
    name: "makarna 3",
    price: "60TL",
  },
  {
    name: "makarna 4",
    price: "45TL",
  },
];

const sicakKahve = [
  {
    name: "Kahve 1",
    price: "50TL",
  },
  {
    name: "Kahve 2",
    price: "55TL",
  },
  {
    name: "Kahve 3",
    price: "60TL",
  },
  {
    name: "Kahve 4",
    price: "45TL",
  },
];

const sogukKahve = [
  {
    name: "Kahve 1",
    price: "50TL",
  },
  {
    name: "Kahve 2",
    price: "55TL",
  },
  {
    name: "Kahve 3",
    price: "60TL",
  },
  {
    name: "Kahve 4",
    price: "45TL",
  },
];

const softIcecek = [
  {
    name: "İçecek 1",
    price: "50TL",
  },
  {
    name: "İçecek 2",
    price: "55TL",
  },
  {
    name: "İçecek 3",
    price: "60TL",
  },
  {
    name: "İçecek 4",
    price: "45TL",
  },
];
