"use client";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React, { useEffect } from "react";
import ProductCard from "./product-card";
import useProducts from "@/hooks/use-products";
import useCurrency from "@/hooks/use-currency";
import ExchangeRatesComponent from "@/components/currency";

function ProductItems() {
  const { searchTerm, updateSearchTerm } = useProducts();
  const { startPrice, endPrice, updateByPrice } = useProducts();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(e.target.value);
  };

  // const handlePageChange = (page: number) => {
  //   setPagination(page, itemsPerPage, amount);
  // };
  const currency = useCurrency()?.curr || 5.1;

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
    detail: detailsList.find((el) =>
      el.detailId
        .replace(/\s/g, "")
        .toLowerCase()
        .includes(item?.name.replace(/\s/g, "").toLowerCase() || "")
    ),
  }));

  const amount = useProducts().numsum;
  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="w-full xs:h-full xxs:h-full lg:h-12 gap-y-2 py-2 flex xs:flex-col xxs:flex-col lg:flex-row justify-between px-2 xs:rounded-md xxs:rounded-md lg:rounded-xl bg-opacity-80 items-center bg-gradient-to-r from-blue-500 to-blue-600 relative">
        <div className="flex flex-row xs:gap-x-1 xxs:gap-x-1 lg:gap-x-4 items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Поиск товара"
            className="bg-white border-none xs:w-full xxs:w-full lg:text-base xs:text-xs lg:w-60 xxs:rounded-sm xs:rounded-sm lg:rounded-md xs:h-6 lg:h-9 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
          <Search
            size={30}
            className="hover:text-slate-800 lg:w-fit xs:w-4 xxs:w-4 text-white cursor-pointer"
          />
        </div>
        <div className="flex xs:flex-col xxs:flex-col lg:flex-row xs:gap-x-1 xxs:gap-x-1 lg:gap-x-2 items-center">
          <p className="text-neutral-100 lg:text-base xs:text-xs">Цена от</p>
          <input
            type="number"
            value={startPrice}
            onChange={(e) => updateByPrice(Number(e.target.value), endPrice)}
            placeholder="0 ₸"
            className="bg-white text-neutral-400 border-none xxs:w-full xs:w-full lg:text-base xs:text-xs lg:w-24 xxs:rounded-sm xs:rounded-sm lg:rounded-md xs:h-6 lg:h-9 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
          <p className="text-neutral-100 lg:text-base xs:text-xs">до</p>
          <input
            type="number"
            value={endPrice}
            onChange={(e) => updateByPrice(startPrice, Number(e.target.value))}
            placeholder="999 999 ₸"
            className="bg-white text-neutral-400 border-none xxs:w-full xs:w-full lg:text-base xs:text-xs lg:w-24 xxs:rounded-sm xs:rounded-sm lg:rounded-md xs:h-6 lg:h-9 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
          />
        </div>

        <p className="text-neutral-100 xs:w-full xxs:w-full lg:text-base xs:text-xs items-center flex flex-row justify-center lg:w-40">
          Всего найдено: {amount}
        </p>
      </div>
      <ExchangeRatesComponent />
      <div className="grid grid-flow-row xs:grid-cols-1 justify-items-center lg:grid-cols-3 gap-2 grid-rows-1 min-h-screen">
        {data.map((item: any, ind) => (
          <ProductCard
            key={ind}
            productId={item.product.id}
            name={item.product.name}
            price={item.detail?.price || ""}
            balance={item.detail?.value1 || ""}
            img={item.product.images[0].url}
            detailId={item.product.detailId}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductItems;
