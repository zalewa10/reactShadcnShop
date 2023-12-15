import { StaticImageData } from "next/image";
export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  images: StaticImageData[];
}
