import { Search } from "lucide-react";
import React from "react";
import ProductCard from "./product-card";

function ProductItems() {
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

        <p className="text-neutral-100 w-60">Всего найдено:</p>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-2">
        <ProductCard
          productId="1"
          name="Something kiokjkjfdgdfg lkdlfklkg"
          price="20000"
          balance="12"
          img=""
        />
        <ProductCard
          productId="2"
          name="Something kiokjkjfdgdfg lkdlfklkg 456 KLDFGKdfgl"
          price="25000"
          img=""
          balance="0"
        />
        <ProductCard
          productId="3"
          name="Something kiokjkjfdgdfg "
          price="20000"
          balance="10"
          img=""
        />
        <ProductCard
          productId="4"
          name="Something kiokjkjfdgdfg lkdlfklkg Kelma ommmammmmmjhsdfsdf"
          price="20000"
          balance="5"
          img=""
        />
      </div>
    </div>
  );
}

export default ProductItems;
