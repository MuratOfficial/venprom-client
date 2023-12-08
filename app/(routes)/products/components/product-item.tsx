"use client";
import { Search } from "lucide-react";
import React from "react";
import ProductCard from "./product-card";
import useProducts from "@/hooks/use-products";
import AnimateFadeIn from "@/components/animations/fade-in";

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
      <div className="w-full h-12 flex flex-row justify-between px-2 rounded-xl bg-opacity-80 shadow-xl items-center bg-gradient-to-r from-blue-500 to-blue-600 relative">
        <div className="flex flex-row gap-x-4 items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Напишите искомый товар"
            className="bg-white border-none w-80 rounded-xl h-10 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
          <Search
            size={30}
            className="hover:text-slate-800 text-white cursor-pointer"
          />
        </div>

        <p className="text-neutral-100 w-60">Всего найдено: {amount}</p>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-2 grid-rows-1 min-h-screen">
        {data.map((item, key) => (
          <AnimateFadeIn key={key}>
            <ProductCard
              productId={item.product.id}
              name={item.product.name}
              price={item.detail?.price || ""}
              balance={item.detail?.value1 || ""}
              img={item.product.images[0].url}
              detailId={item.product.detailId}
            />
          </AnimateFadeIn>
        ))}
      </div>
    </div>
  );
}

export default ProductItems;
