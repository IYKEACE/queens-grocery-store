export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
  colors: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Reusable drinkware for a \n greener lifestyle",
    price: 43.85,
    image: "/Water-bottles.jpg",
    tag: "Premium",
    colors: ["#4F6D7A", "#C0D6DF", "#EAE6E1"],
  },
  {
    id: 2,
    name: "Non-toxic cookware for \n sustainable cooking",
    price: 78.35,
    image: "/pot.jpg",
    tag: "New",
    colors: ["#D4A373", "#CCD5AE"],
  },
  {
    id: 3,
    name: "Kettle & Toaster eco-friendly \n meals",
    price: 143.65,
    image: "/Kettle.jpg",
    tag: "New",
    colors: ["#D4A373", "#CCD5AE"],
  },
  {
    id: 4,
    name: "Bamboo Made Utensil \n Holder",
    price: 26.27,
    image: "/Bamboo.jpg",
    tag: "New",
    colors: ["#D4A373", "#CCD5AE"],
  },
];
