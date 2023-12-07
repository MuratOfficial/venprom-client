"use client";
import useProducts from "@/hooks/use-products";
import { cn } from "@/lib/utils";
import { Category, CategoryList, Product } from "@/types";
import React, { useEffect, useState } from "react";

function ProductsList() {
  const { data, fetchDataForStore } = useProducts();

  useEffect(() => {
    fetchDataForStore();
  }, []);
  const activeStore = useProducts().activeStore;
  const activeCategory = useProducts().activeCategory;

  const categoryFilter = useProducts().filterCategories;

  const handleStores = (store: string) => {
    categoryFilter(store);
  };

  const listElements = useProducts().categories;

  const itemListExam: CategoryList[] = listElements.map((item) => ({
    label: item.label,
    listItems: item.listItems,
  }));

  const items = useProducts().items;
  const itemsFilter = useProducts().filterItems;

  const handleItems = (store: string, category: string) => {
    itemsFilter(store, category);
  };

  // const onVisible = (label: string) => {
  //   let active = storeFilter.activeStore;
  //   setLabelName(label);
  //   storeFilter.filterItems("Кабели", labelName);
  // };

  return (
    <div className="h-full shadow-inner flex flex-col gap-y-2 border-2 border-blue-800 rounded-lg p-4 w-80">
      <p className="text-xl uppercase text-center font-semibold text-slate-800">
        Продукция
      </p>
      <div className=" px-2 w-full h-1 rounded-md bg-blue-700" />
      <p className="text-center text-slate-800">По оптовым ценам</p>
      <button
        onClick={() => handleStores("Кабели")}
        className={cn(
          "py-2 transition duration-500 delay-150 px-12 text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-slate-800 ",
          activeStore === "Кабели" && "bg-slate-800"
        )}
      >
        Кабели
      </button>
      <button
        onClick={() => handleStores("Подшипники")}
        className={cn(
          "py-2 transition duration-500 delay-150 px-12 text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-slate-800 ",
          activeStore === "Подшипники" && "bg-slate-800"
        )}
      >
        Подшипники
      </button>
      <div className=" px-2 w-full h-1 rounded-md bg-blue-700" />{" "}
      {activeStore === "" ? (
        <p className="text-center text-base text-slate-700">
          Выберите категорию
        </p>
      ) : (
        <div>
          <div
            className={cn(
              "flex flex-col transition opacity-100 duration-500 delay-100 collapse h-0",
              (activeStore === "Кабели" || activeStore === "Подшипники") &&
                "visible h-full"
            )}
          >
            {itemListExam.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <p
                  onClick={() => handleItems(activeStore, item.label)}
                  className={cn(
                    "cursor-pointer text-slate-800 transition bg-slate-200 duration-500 delay-150 hover:text-neutral-100 hover:bg-slate-800 p-2 px-2 rounded-md",
                    activeCategory === item.label &&
                      "bg-slate-800 text-neutral-100"
                  )}
                >
                  {item.label}
                </p>
                <ul
                  className={cn(
                    "collapse h-0",
                    activeCategory === item.label && "visible h-full"
                  )}
                >
                  {item.listItems.map((el, idx) => (
                    <li
                      className="pl-8 text-sm py-1 hover:text-blue-600 cursor-pointer"
                      key={idx}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
