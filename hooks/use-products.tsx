import { Category, CategoryList, Detail, Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import getCategories from "@/services/get-categories";
import getProducts from "@/services/get-products";
import getDetails from "@/services/get-details";

interface ProductProps {
  items: Product[];
  filterCategories: (store: string) => void;
  categories: CategoryList[];
  filterItems: (store: string, category: string) => void;
  details: Detail[];
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
  const cabelDetails = await getDetails(`${cabelsUrl}/colors`);
  const podDetails = await getDetails(`${podUrl}/colors`);
  return {
    cabelCategories,
    cabelproducts,
    podCategories,
    podProducts,
    cabelDetails,
    podDetails,
  };
};

export const revalidate = 10;

const useProducts = create(
  persist<ProductProps>(
    (set) => ({
      items: [],
      categories: [],
      details: [],
      filterCategories: async (storeName) => {
        try {
          const {
            cabelCategories,
            cabelproducts,
            podCategories,
            podProducts,
            cabelDetails,
            podDetails,
          } = await fetchDataForStore();
          let categoryList: CategoryList[] = [];
          let formattedProducts: Product[] = [];
          let detailsList: Detail[] = [];
          if (storeName === "Кабели") {
            categoryList = cabelCategories.map((item) => ({
              label: item.name,
              listItems: [],
            }));
            formattedProducts = cabelproducts;
            detailsList = cabelDetails;
          } else {
            categoryList = podCategories.map((item) => ({
              label: item.name,
              listItems: [],
            }));
            formattedProducts = podProducts;
            detailsList = podDetails;
          }

          set({
            items: [...formattedProducts],
            categories: [...categoryList],
            details: [...detailsList],
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
          const {
            cabelCategories,
            cabelproducts,
            podCategories,
            podProducts,
            cabelDetails,
            podDetails,
          } = await fetchDataForStore();
          let categoryList: CategoryList[] = [];
          let formattedProducts: Product[] = [];
          let detailsList: Detail[] = [];
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
            detailsList = cabelDetails;
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
            detailsList = podDetails;
          }

          set({
            items: [...formattedProducts],
            categories: [...categoryList],
            details: [...detailsList],
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
