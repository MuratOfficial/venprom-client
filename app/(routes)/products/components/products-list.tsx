"use client";
import useProducts from "@/hooks/use-products";
import { cn } from "@/lib/utils";
import { Category, CategoryList, Product } from "@/types";
import { useRouter } from "next/router";
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
    <div className="h-full  flex flex-col gap-y-2  rounded-lg xs:w-40 lg:w-80 ">
      <p className="lg:text-2xl xs:text-lg uppercase text-center font-bold text-blue-900">
        Продукция
      </p>
      <div className="h-full  flex flex-col gap-y-2  rounded-lg p-4 bg-blue-100 xs:w-40 lg:w-72">
        <p className="text-center font-semibold lg:text-lg xs:text-xs text-blue-900">
          По оптовым ценам
        </p>
        <button
          onClick={() => handleStores("Кабели")}
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-sm lg:text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-blue-950 ",
            activeStore === "Кабели" && "bg-blue-950"
          )}
        >
          Кабели
        </button>
        <button
          onClick={() => handleStores("Подшипники")}
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-sm lg:text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-blue-950 ",
            activeStore === "Подшипники" && "bg-blue-950"
          )}
        >
          Подшипники
        </button>
        {activeStore === "" ? (
          <p className="text-center xs:text-xs lg:text-sm text-blue-900">
            Выберите категорию
          </p>
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
                      "cursor-pointer ml-4 lg:text-sm xs:text-xs text-blue-950 transition bg-blue-200 duration-500 delay-150 hover:text-neutral-100 hover:bg-blue-800 p-2 px-2 rounded-md",
                      activeCategory === item.label &&
                        "bg-blue-950 text-neutral-100"
                    )}
                  >
                    {item.label}
                  </p>
                  <ul
                    className={cn(
                      "collapse h-0",
                      activeCategory === item.label && "visible p-1 h-full"
                    )}
                  >
                    {item.listItems.map((el, idx) => (
                      <li
                        className="pl-8 xs:text-xs lg:text-sm py-1 hover:text-blue-600 cursor-pointer"
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

      <div className="h-full mt-2 flex flex-col gap-y-2   w-full  bg-[#f1efdd] px-4 p-2 py-4 rounded-lg">
        <p className="text-center xs:text-xs lg:text-base font-semibold text-[#686230]">
          Комплексное оснащение (снабжение) промышленных предприятий
        </p>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/0m0xhf">Электротехническая продукция</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/0f35l9">Приборы КИП и А</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/githjw">Светотехническая продукция</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/9h7b2l">
            Запасные части к экскаваторам и прочей спецтехнике
          </a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/bitf4s">
            Грузоподъёмное оборудование и запчасти к ним
          </a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/d9d8ra">Резинотехнические изделия</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/yhbzqj">Спецодежда и обувь</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/kdm89u">Средства индивидуальной защиты</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/ry09at">
            Электрический и ручной инструменты
          </a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/ow68n6">Электроизоляционные материалы</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/8e6pna">Асбестотехнические материалы</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/lbm0v3">Теплоизоляционные материалы</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/1qhjvo">Промышленные насосы</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/rz4w48">
            Вентиляционное и отопительное оборудование
          </a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/r65c0j">Трубопроводная арматура</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/40c642">Гидравлика</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/ywlwob">Приводная техника и ремни</a>
        </button>
        <button
          className={cn(
            "py-2 transition duration-500 delay-150 xs:px-2 lg:px-12 xs:text-xs lg:text-sm rounded-lg text-center bg-[#bbb157] text-neutral-100 hover:bg-[#686230] "
          )}
        >
          <a href="https://wa.link/rlui07">Конвейерные ленты</a>
        </button>
      </div>
    </div>
  );
}

export default ProductsList;
