import { Product } from "@/types";

const getProducts = async (url: string): Promise<Product[]> => {
  const res = await fetch(url);

  return res.json();
};

export default getProducts;
