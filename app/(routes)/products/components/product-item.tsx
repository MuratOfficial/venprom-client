"use client";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React, { useEffect } from "react";
import ProductCard from "./product-card";
import useProducts from "@/hooks/use-products";

function ProductItems() {
  const { searchTerm, updateSearchTerm } = useProducts();
  const { startPrice, endPrice, updateByPrice } = useProducts();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(e.target.value);
  };

  // const handlePageChange = (page: number) => {
  //   setPagination(page, itemsPerPage, amount);
  // };

  const detailsList = useProducts().details;
  const shownList = useProducts().items;

  const data = shownList.map((item) => ({
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
      <div className="w-full xs:h-16 lg:h-12 flex xs:flex-col lg:flex-row justify-between px-2 xs:rounded-md lg:rounded-xl bg-opacity-80 items-center bg-gradient-to-r from-blue-500 to-blue-600 relative">
        <div className="flex flex-row xs:gap-x-1 lg:gap-x-4 items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Поиск товара"
            className="bg-white border-none xs:w-32 lg:text-base xs:text-xs lg:w-60 xs:rounded-sm lg:rounded-md xs:h-6 lg:h-9 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
          <Search
            size={30}
            className="hover:text-slate-800 lg:w-fit xs:w-4 text-white cursor-pointer"
          />
        </div>
        <div className="flex flex-row xs:gap-x-1 lg:gap-x-2 items-center ">
          <p className="text-neutral-100">Цена от</p>
          <input
            type="number"
            value={startPrice}
            onChange={(e) => updateByPrice(Number(e.target.value), endPrice)}
            placeholder="0 ₸"
            className="bg-white text-neutral-400 border-none xs:w-12 lg:text-base xs:text-xs lg:w-24 xs:rounded-sm lg:rounded-md xs:h-6 lg:h-9 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
          <p className="text-neutral-100">до</p>
          <input
            type="number"
            value={endPrice}
            onChange={(e) => updateByPrice(startPrice, Number(e.target.value))}
            placeholder="999 999 ₸"
            className="bg-white text-neutral-400 border-none xs:w-12 lg:text-base xs:text-xs lg:w-24 xs:rounded-sm lg:rounded-md xs:h-6 lg:h-9 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
        </div>

        <p className="text-neutral-100 xs:w-20 lg:text-base xs:text-xs lg:w-40">
          Всего найдено: {amount}
        </p>
      </div>
      <div className="grid grid-flow-row xs:grid-cols-1 lg:grid-cols-3 gap-2 grid-rows-1 min-h-screen">
        {data.map((item: any, ind) => (
          <ProductCard
            key={ind}
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
