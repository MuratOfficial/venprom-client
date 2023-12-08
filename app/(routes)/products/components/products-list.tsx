"use client";
import useProducts from "@/hooks/use-products";
import { cn } from "@/lib/utils";
import { Category, CategoryList, Product } from "@/types";
import React, { useEffect, useState } from "react";

function ProductsList() {
  const { data, fetchDataForStore } = useProducts();

  useEffect(() => {
    fetchDataForStore();
  }, [fetchDataForStore]);
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
    <div className="h-full  flex flex-col gap-y-2  rounded-lg p-4 w-80">
      <p className="text-2xl uppercase text-center font-semibold text-blue-900">
        Продукция
      </p>
      <div className=" px-2 w-full h-1 rounded-md bg-blue-900" />
      <p className="text-center text-blue-900">По оптовым ценам</p>
      <button
        onClick={() => handleStores("Кабели")}
        className={cn(
          "py-2 transition duration-500 delay-150 px-12 text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-blue-950 ",
          activeStore === "Кабели" && "bg-blue-950"
        )}
      >
        Кабели
      </button>
      <button
        onClick={() => handleStores("Подшипники")}
        className={cn(
          "py-2 transition duration-500 delay-150 px-12 text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-blue-950 ",
          activeStore === "Подшипники" && "bg-blue-950"
        )}
      >
        Подшипники
      </button>
      <div className=" px-2 w-full h-1 rounded-md bg-blue-900" />{" "}
      {activeStore === "" ? (
        <p className="text-center text-base text-blue-900">
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
                    "cursor-pointer text-blue-950 transition bg-slate-200 duration-500 delay-150 hover:text-neutral-100 hover:bg-blue-800 p-2 px-2 rounded-md",
                    activeCategory === item.label &&
                      "bg-blue-950 text-neutral-100"
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
