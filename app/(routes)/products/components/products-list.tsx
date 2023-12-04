"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

function ProductsList() {
  const [labelName, setLabelName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const onVisible = (label: string) => {
    setLabelName(label);
  };
  const onCategory = (str: string) => {
    setLabelName("");
    setCategoryName(str);
  };

  const itemListExam = [
    {
      label: "category1",
      items: ["element1", "element2", "element3"],
    },
    {
      label: "category2",
      items: ["element1", "element2", "element3"],
    },
    {
      label: "category3",
      items: ["element1", "element2", "element3"],
    },
  ];
  const itemListExam2 = [
    {
      label: "category1I",
      items: ["element1", "element2", "element3"],
    },
    {
      label: "category2I",
      items: ["element1", "element2", "element3"],
    },
    {
      label: "category3I",
      items: ["element1", "element2", "element3"],
    },
  ];
  return (
    <div className="h-full shadow-inner flex flex-col gap-y-2 border-2 border-blue-800 rounded-lg p-4 w-80">
      <p className="text-xl uppercase text-center font-semibold text-slate-800">
        Продукция
      </p>
      <div className=" px-2 w-full h-1 rounded-md bg-blue-700" />
      <p className="text-center text-slate-800">По оптовым ценам</p>
      <button
        onClick={() => onCategory("first")}
        className={cn(
          "py-2 transition duration-500 delay-150 px-12 text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-slate-800 ",
          categoryName === "first" && "bg-slate-800"
        )}
      >
        Кабели
      </button>
      <button
        onClick={() => onCategory("second")}
        className={cn(
          "py-2 transition duration-500 delay-150 px-12 text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-slate-800 ",
          categoryName === "second" && "bg-slate-800"
        )}
      >
        Подшипники
      </button>
      <div className=" px-2 w-full h-1 rounded-md bg-blue-700" />{" "}
      {categoryName === "" ? (
        <p className="text-center text-base text-slate-700">
          Выберите категорию
        </p>
      ) : (
        <div>
          <div
            className={cn(
              "flex flex-col transition opacity-100 duration-500 delay-100 collapse h-0",
              categoryName === "first" && "visible h-full"
            )}
          >
            {itemListExam.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <p
                  onClick={() => onVisible(item.label)}
                  className={cn(
                    "cursor-pointer text-slate-800 transition duration-500 delay-150 hover:text-neutral-100 hover:bg-slate-800 p-2 px-2 rounded-md",
                    labelName === item.label && "bg-slate-800 text-neutral-100"
                  )}
                >
                  {item.label}
                </p>
                <ul
                  className={cn(
                    "collapse h-0",
                    labelName === item.label && "visible h-full"
                  )}
                >
                  {item.items.map((el, idx) => (
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
          <div
            className={cn(
              "flex flex-col transition opacity-100 duration-500 delay-100 collapse h-0",
              categoryName === "second" && "visible h-full"
            )}
          >
            {itemListExam2.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <p
                  onClick={() => onVisible(item.label)}
                  className={cn(
                    "cursor-pointer text-slate-800 transition duration-500 delay-150 hover:text-neutral-100 hover:bg-slate-800 p-2 px-2 rounded-md",
                    labelName === item.label && "bg-slate-800 text-neutral-100"
                  )}
                >
                  {item.label}
                </p>
                <ul
                  className={cn(
                    "collapse h-0",
                    labelName === item.label && "visible h-full"
                  )}
                >
                  {item.items.map((el, idx) => (
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