"use client";
import { Search } from "lucide-react";
import React from "react";
import ProductCard from "./product-card";
import useProducts from "@/hooks/use-products";
import { Detail, Product } from "@prisma/client";

function ProductItems() {
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
      <div className="w-full h-12 flex flex-row justify-between px-2 rounded-xl bg-opacity-80 shadow-xl items-center bg-blue-600 relative">
        <div className="flex flex-row gap-x-4 items-center">
          <input
            type="text"
            placeholder="Напишите искомый товар"
            className="bg-white border-none w-80 rounded-lg h-10 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
          <Search
            size={30}
            className="hover:text-slate-800 text-white cursor-pointer"
          />
        </div>

        <p className="text-neutral-100 w-60">Всего найдено: {amount}</p>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-2 grid-rows-1">
        {data.map((item, key) => (
          <ProductCard
            key={key}
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
