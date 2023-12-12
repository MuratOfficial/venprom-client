"use client";
import { Search } from "lucide-react";
import React from "react";
import ProductCard from "./product-card";
import useProducts from "@/hooks/use-products";

function ProductItems() {
  const { searchTerm, updateSearchTerm } = useProducts();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(e.target.value);
  };
  const detailsList = useProducts().details;
  const productsList = useProducts().items;

  const data = productsList.map((item) => ({
    product: {
      id: item.id,
      category: item.category,
      name: item.name,
      images: item.images,
      detailId: item.detailId,
    },
    detail: detailsList.find((el) => el.detailId === item.detailId),
  }));

  const amount = useProducts().numsum;
  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="w-full xs:h-8 lg:h-12 flex flex-row justify-between px-2 xs:rounded-md lg:rounded-xl bg-opacity-80 shadow-xl items-center bg-gradient-to-r from-blue-500 to-blue-600 relative">
        <div className="flex flex-row xs:gap-x-1 lg:gap-x-4 items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Напишите искомый товар"
            className="bg-white border-none xs:w-32 lg:text-base xs:text-xs lg:w-80 xs:rounded-md lg:rounded-xl xs:h-6 lg:h-10 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
          <Search
            size={30}
            className="hover:text-slate-800 lg:w-fit xs:w-4 text-white cursor-pointer"
          />
        </div>

        <p className="text-neutral-100 xs:w-20 lg:text-base xs:text-xs lg:w-60">
          Всего найдено: {amount}
        </p>
      </div>
      <div className="grid grid-flow-row xs:grid-cols-1 lg:grid-cols-3 gap-2 grid-rows-1 min-h-screen">
        {data.map((item) => (
          <ProductCard
            productId={item.product.id}
            name={item.product.name}
            price={item.detail?.price || ""}
            balance={item.detail?.value1 || ""}
            img={item.product.images[0].url}
            detailId={item.product.detailId}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductItems;
