import { Category, CategoryList, Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import getCategories from "@/services/get-categories";
import getProducts from "@/services/get-products";

interface ProductProps {
  items: Product[];
  filterCategories: (store: string) => void;
  categories: CategoryList[];
  filterItems: (store: string, category: string) => void;
  activeStore: string;
  activeCategory: string;
  numsum: number;
}

const cabelsUrl =
  "http://localhost:3000/api/510b3e4f-9539-4d5a-90c8-ced6b6ba8cdd";

const podUrl = "http://localhost:3000/api/17bf9dbd-132c-46ec-84aa-aec56ddee0f0";

// ... (import statements)

const fetchDataForStore = async () => {
  const cabelCategories = await getCategories(`${cabelsUrl}/categories`);
  const cabelproducts = await getProducts(`${cabelsUrl}/products`);
  const podCategories = await getCategories(`${podUrl}/categories`);
  const podProducts = await getProducts(`${podUrl}/products`);
  return { cabelCategories, cabelproducts, podCategories, podProducts };
};

export const revalidate = 10;

const useProducts = create(
  persist<ProductProps>(
    (set) => ({
      items: [],
      categories: [],
      filterCategories: async (storeName) => {
        try {
          const { cabelCategories, cabelproducts, podCategories, podProducts } =
            await fetchDataForStore();
          let categoryList: CategoryList[] = [];
          let formattedProducts: Product[] = [];
          if (storeName === "Кабели") {
            categoryList = cabelCategories.map((item) => ({
              label: item.name,
              listItems: [],
            }));
            formattedProducts = cabelproducts;
          } else {
            categoryList = podCategories.map((item) => ({
              label: item.name,
              listItems: [],
            }));
            formattedProducts = podProducts;
          }

          set({
            items: [...formattedProducts],
            categories: [...categoryList],
            activeStore: storeName,
            activeCategory: "",
            numsum: formattedProducts.length,
          });
        } catch (error: any) {
          console.error(error.message);
        }
      },

      filterItems: async (storeName, category) => {
        try {
          const { cabelCategories, cabelproducts, podCategories, podProducts } =
            await fetchDataForStore();
          let categoryList: CategoryList[] = [];
          let formattedProducts: Product[] = [];
          if (storeName === "Кабели") {
            categoryList = cabelCategories.map((item) => ({
              label: item.name,
              listItems: cabelproducts
                .filter((item) => item.category.name === category)
                .map((item) => item.name),
            }));
            formattedProducts = cabelproducts.filter(
              (item) => item.category.name === category
            );
          } else {
            categoryList = podCategories.map((item) => ({
              label: item.name,
              listItems: podProducts
                .filter((item) => item.category.name === category)
                .map((item) => item.name),
            }));
            formattedProducts = podProducts.filter(
              (item) => item.category.name === category
            );
          }

          set({
            items: [...formattedProducts],
            categories: [...categoryList],
            activeStore: storeName,
            activeCategory: category,
            numsum: formattedProducts.length,
          });
        } catch (error: any) {
          console.error(error.message);
        }
      },
      activeStore: "",
      activeCategory: "",
      numsum: 0,
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProducts;
