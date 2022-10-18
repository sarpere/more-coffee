// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { menuTypes } from "../../../types";
type Data = menuTypes.menuItem[] | menuTypes.category;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let response;
  switch (req.query.category) {
    case "yemek":
      response = yemek;
      break;
    case "sicak-kahve":
      response = sicakKahve;
      break;
    case "soguk-kahve":
      response = sogukKahve;
      break;
    case "tatli":
      response = tatli;
      break;
    case "soft-icecek":
      response = softIcecek;
      break;
  }
  if (req.query.category) {
    if (response === undefined) {
      res.status(404).end();
      return;
    } else {
      res.status(200).json({
        data: response,
        category:
          categories.find((category) =>
            category.url.includes(req.query.category as string)
          ) ?? categories[0],
      });
      return;
    }
  }
  res.status(200).json(categories);
}
const categories = [
  { name: "ANA YEMEK", image: "assets/yemek.webp", url: "/yemek" },
  {
    name: "SICAK KAHVE",
    image: "assets/sicak_kahve.webp",
    url: "/sicak-kahve",
  },
  {
    name: "SOĞUK KAHVE",
    image: "assets/soguk_kahve.webp",
    url: "/soguk-kahve",
  },
  { name: "TATLI", image: "assets/tatli.webp", url: "/tatli" },
  { name: "SOFT İÇECEK", image: "assets/soft.webp", url: "/soft-icecek" },
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

const tatli = [
  {
    name: "Tatlı 1",
    price: "50TL",
  },
  {
    name: "Tatlı 2",
    price: "55TL",
  },
  {
    name: "Tatlı 3",
    price: "60TL",
  },
  {
    name: "Tatlı 4",
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
