import { Category, CategoryList, Detail, Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import getCategories from "@/services/get-categories";
import getProducts from "@/services/get-products";
import getDetails from "@/services/get-details";

interface ProductProps {
  data:
    | {
        cabelCategories: Category[];
        cabelproducts: Product[];
        podCategories: Category[];
        podProducts: Product[];
        cabelDetails: Detail[];
        podDetails: Detail[];
      }
    | {
        cabelCategories: [];
        cabelproducts: [];
        podCategories: [];
        podProducts: [];
        cabelDetails: [];
        podDetails: [];
      };
  fetchDataForStore: () => Promise<void>;
  items: Product[];
  filterCategories: (store: string) => void;
  categories: CategoryList[];
  filterItems: (store: string, category: string) => void;
  details: Detail[];
  activeStore: string;
  activeCategory: string;
  numsum: number;
  searchTerm: string;
  updateSearchTerm: (term: string) => void;
}

const cabelsUrl =
  "https://venprom-client.vercel.app/api/510b3e4f-9539-4d5a-90c8-ced6b6ba8cdd";

const podUrl =
  "https://venprom-client.vercel.app/api/17bf9dbd-132c-46ec-84aa-aec56ddee0f0";
// const fetchDataForStore = async () => {
//   const cabelCategories = await getCategories(`${cabelsUrl}/categories`);
//   const cabelproducts = await getProducts(`${cabelsUrl}/products`);
//   const podCategories = await getCategories(`${podUrl}/categories`);
//   const podProducts = await getProducts(`${podUrl}/products`);
//   const cabelDetails = await getDetails(`${cabelsUrl}/colors`);
//   const podDetails = await getDetails(`${podUrl}/colors`);
//   return {
//     cabelCategories,
//     cabelproducts,
//     podCategories,
//     podProducts,
//     cabelDetails,
//     podDetails,
//   };
// };

// ... (import statements)

export const revalidate = 60;

const useProducts = create(
  persist<ProductProps>(
    (set, get) => ({
      data: {
        cabelCategories: [],
        cabelproducts: [],
        podCategories: [],
        podProducts: [],
        cabelDetails: [],
        podDetails: [],
      },
      fetchDataForStore: async () => {
        try {
          const cabelCategories = await getCategories(
            `${cabelsUrl}/categories`
          );
          const cabelproducts = await getProducts(`${cabelsUrl}/products`);
          const podCategories = await getCategories(`${podUrl}/categories`);
          const podProducts = await getProducts(`${podUrl}/products`);
          const cabelDetails = await getDetails(`${cabelsUrl}/colors`);
          const podDetails = await getDetails(`${podUrl}/colors`);

          set({
            data: {
              cabelCategories,
              cabelproducts,
              podCategories,
              podProducts,
              cabelDetails,
              podDetails,
            },
            items: [...cabelproducts, ...podProducts],
            categories: [],
            details: [...cabelDetails, ...podDetails],
            activeStore: "",
            activeCategory: "",
            numsum: 0,
            searchTerm: "",
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
      items: [],
      categories: [],
      details: [],
      filterCategories: (storeName) => {
        const cabelCategories = get().data.cabelCategories || [];
        const podCategories = get().data.podCategories || [];
        const cabelproducts = get().data.cabelproducts || [];
        const podProducts = get().data.podProducts || [];
        const cabelDetails = get().data.cabelDetails || [];
        const podDetails = get().data.podDetails || [];
        const categoryList = (
          storeName === "Кабели" ? cabelCategories : podCategories
        ).map((item) => ({
          label: item.name,
          listItems: [],
        }));

        const formattedProducts =
          storeName === "Кабели" ? cabelproducts : podProducts;

        const detailsList = storeName === "Кабели" ? cabelDetails : podDetails;

        set({
          items: [...formattedProducts],
          categories: [...categoryList],
          details: [...detailsList],
          activeStore: storeName,
          activeCategory: "",
          numsum: formattedProducts.length,
          searchTerm: "",
        });
      },

      filterItems: (storeName, category) => {
        const cabelCategories = get().data.cabelCategories || [];
        const podCategories = get().data.podCategories || [];
        const cabelproducts = get().data.cabelproducts || [];
        const podProducts = get().data.podProducts || [];
        const cabelDetails = get().data.cabelDetails || [];
        const podDetails = get().data.podDetails || [];

        const categoryList = (
          storeName === "Кабели" ? cabelCategories : podCategories
        ).map((item) => ({
          label: item.name,
          listItems: (storeName === "Кабели" ? cabelproducts : podProducts)
            .filter((item) => item.category.name === category)
            .map((item) => item.name),
        }));

        const formattedProducts = (
          storeName === "Кабели" ? cabelproducts : podProducts
        ).filter((item) => item.category.name === category);

        const detailsList = storeName === "Кабели" ? cabelDetails : podDetails;

        set({
          items: [...formattedProducts],
          categories: [...categoryList],
          details: [...detailsList],
          activeStore: storeName,
          activeCategory: category,
          numsum: formattedProducts.length,
          searchTerm: "",
        });
      },
      activeStore: "",
      activeCategory: "",
      numsum: 0,
      searchTerm: "",
      updateSearchTerm: (term) => {
        const cabelproducts = get().data.cabelproducts || [];
        const podProducts = get().data.podProducts || [];

        const allProducts = [...cabelproducts, ...podProducts];
        const filteredList = allProducts.filter((el) =>
          el.name.toLowerCase().includes(term.toLowerCase())
        );
        if (term === "") {
          set({
            searchTerm: term,
            items: [...allProducts],
            numsum: allProducts.length,
          });
        }
        set({
          searchTerm: term,
          items: [...filteredList],
          numsum: filteredList.length,
        });
      },
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProducts;
