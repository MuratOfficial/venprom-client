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
        <p className="text-center text-sm text-blue-900">Выберите категорию</p>
      ) : (
        <div>
          <div
            className={cn(
              "flex flex-col transition-[height] opacity-100 duration-500 delay-100 collapse h-0",
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
      <div className="h-full mt-4 flex flex-col gap-y-2   w-full border-t-2 border-[#bbb157] py-2 border-dashed">
        <p className="text-center text-sm text-[#686230]">
          Комплексное оснащение (снабжение) промышленных предприятий
        </p>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Электротехническая продукция
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Приборы КИП и А
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Светотехническая продукция
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Запасные части к экскаваторам и прочей спецтехнике
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Грузоподъёмное оборудование и запчасти к ним
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Резинотехнические изделия
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Спецодежда и обувь
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Средства индивидуальной защиты
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Электрический и ручной инструменты
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Электроизоляционные материалы
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Асбестотехнические материалы
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Теплоизоляционные материалы
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Промышленные насосы
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Вентиляционное и отопительное оборудование
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Трубопроводная арматура
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Гидравлика
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Приводная техника и ремни
        </button>
        <button
          onClick={() => console.log("#")}
          className={cn(
            "py-2 transition duration-500 delay-150 px-12 text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          Конвейерные ленты
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
