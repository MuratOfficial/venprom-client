import { Category } from "@/types";

const getCategories = async (url: string): Promise<Category[]> => {
  const res = await fetch(url);

  return res.json();
};

export default getCategories;
