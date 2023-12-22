"use client";
import ClientForm from "@/components/client/client-form";
import ClientNav from "@/components/client/client-nav";
import useProducts from "@/hooks/use-products";
import { cn } from "@/lib/utils";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductItemPage = ({ params }: { params: { productId: string } }) => {
  const items = useProducts().items;
  const detailItems = useProducts().details;
  const [price, setPrice] = useState("");

  const product = items.find((el) => el.id === params.productId);
  const detail = detailItems.find((el) => el.detailId === product?.detailId);
  const descript = product?.category;

  const currentStore = useProducts().activeStore;

  const detPrice = detail?.price || "";
  const detPrice1 = detail?.price1 || "";
  const detBalance = detail?.value1 || "";

  const numPrice: number = Math.ceil(parseFloat(detPrice) * 5.1 * 1.12);
  const numPrice1: number = Math.ceil(parseFloat(detPrice1) * 5.1 * 1.12);
  const numBalance = parseFloat(detBalance.replace(/,/g, ".")).toFixed(2);
  const endBalance: number = parseFloat(numBalance);
  return (
    <div className="h-full w-full flex flex-col h-min-screen">
      <ClientNav />
      <div className="xs:h-full lg:h-8 w-full text-left xs:py-1 lg:py-8 flex xs:flex-col lg:flex-row items-center xs:px-4 lg:px-48 gap-x-4 text-slate-800 text-sm ">
        <Link href="/" className="hover:text-blue-600">
          Главная
        </Link>
        <ChevronRight size={15} />

        <Link href="/products" className="hover:text-blue-600">
          Продукция
        </Link>
        <ChevronRight size={15} />
        <p>{product?.category.name}</p>
        <ChevronRight size={15} />
        <Link
          href={`/products/${params.productId}`}
          className="hover:text-blue-600 font-semibold"
        >
          {product?.name}
        </Link>
      </div>
      <div className="xs:px-4 lg:px-48 flex flex-col gap-y-8">
        <div className="bg-blue-50 rounded-lg w-full h-full py-8 px-8 flex flex-col gap-y-10">
          <p className="text-3xl font-semibold uppercase">{product?.name}</p>
          {/**Content Description */}
          <div className="grid  xs:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-y-4 items-center justify-center cols-span-1">
              <Image
                height={400}
                width={400}
                alt=""
                src={product?.images[0].url || ""}
                className=" w-full h-fit "
              />
              <Image
                height={400}
                width={400}
                alt=""
                src={product?.images[1]?.url || ""}
                className={cn(
                  " w-full h-0 collapse",
                  product?.images[1] && "visible h-fit"
                )}
              />
            </div>

            {product?.detailId.includes("p") ? (
              <div
                className={cn(
                  " flex flex-col justify-between visible w-full col-span-1"
                )}
              >
                <p className="dropdown-shadow-sm py-4 w-full  text-center text-lg font-semibold">
                  Характеристики подшипника {product.name}
                </p>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-center font-semibold col-span-2">
                    Параметр
                  </p>
                  <p className="text-center font-semibold col-span-1">
                    Обозначение
                  </p>
                  <p className="text-center font-semibold col-span-1">
                    Значение
                  </p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-left  col-span-2">
                    Внутренний диаметр подшипника, мм
                  </p>
                  <p className="text-center  col-span-1">д</p>
                  <p className="text-center  col-span-1">
                    {product?.characteristics1}
                  </p>
                </div>
                <div className="text-sm  w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-left  col-span-2">
                    Наружный диаметр подшипника, мм
                  </p>
                  <p className="text-center  col-span-1">Д</p>
                  <p className="text-center  col-span-1">
                    {product?.characteristics2}
                  </p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-left  col-span-2">Ширина подшипника, мм</p>
                  <p className="text-center  col-span-1">Б</p>
                  <p className="text-center  col-span-1">
                    {product?.characteristics3}
                  </p>
                </div>
                <div className="text-sm  w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-left  col-span-2">
                    Радиус монтажной фаски , мм
                  </p>
                  <p className="text-center  col-span-1">р</p>
                  <p className="text-center  col-span-1">
                    {product?.characteristics4}
                  </p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-left  col-span-2">
                    Статическая грузоподъемность, Н
                  </p>
                  <p className="text-center relative  col-span-1">
                    С<span className="text-[8px] absolute top-2">0</span>
                  </p>
                  <p className="text-center  col-span-1">
                    {product?.characteristics5}
                  </p>
                </div>
                <div className="text-sm  w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-left  col-span-2">
                    Динамическая грузоподъемность, Н
                  </p>
                  <p className="text-center  col-span-1">C</p>
                  <p className="text-center  col-span-1">
                    {product?.characteristics6}
                  </p>
                </div>
                <div className="text-sm  w-full items-center px-4 py-2 grid grid-flow-row grid-cols-4 gap-4">
                  <p className="text-left  col-span-2">Масса подшипника, кг</p>
                  <p className="text-center  col-span-1">м</p>
                  <p className="text-center  col-span-1">
                    {product?.characteristics7}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={cn(
                  "flex flex-col justify-between visible w-full col-span-1"
                )}
              >
                <p className="dropdown-shadow-sm py-6 w-full text-center text-lg font-semibold">
                  Характеристики
                </p>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Влажность воздуха при 35° C [%]</p>
                  <p className="text-right">{product?.characteristics1}</p>
                </div>
                <div className="text-sm  w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Гарантийный срок эксплуатации [месяц]</p>
                  <p className="text-right">{product?.characteristics2}</p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Испытательное переменное напряжение частотой 50 Гц, 5 мин.
                    [кВ]
                  </p>
                  <p className="text-right">{product?.characteristics3}</p>
                </div>
                <div className="text-sm  w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Максимальная рабочая температура жилы при перегрузке [°С]
                  </p>
                  <p className="text-right">{product?.characteristics4}</p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Максимальная рабочая температура жилы [°С]</p>
                  <p className="text-right">{product?.characteristics5}</p>
                </div>
                <div className="text-sm  w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Монтаж при температуре, не ниже [°C]</p>
                  <p className="text-right">{product?.characteristics6}</p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Номинальное переменное напряжение частотой 50 Гц [кВ]
                  </p>
                  <p className="text-right">{product?.characteristics7}</p>
                </div>
                <div className="text-sm w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Номинальное постоянное напряжение [кВ]</p>
                  <p className="text-right">{product?.characteristics8}</p>
                </div>
                <div className="text-sm w-full bg-blue-100 items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Радиус изгиба кабелей [наружных диаметров]</p>
                  <p className="text-right">{product?.characteristics9}</p>
                </div>
                <div className="text-sm w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Разность уровней, не более [м]</p>
                  <p className="text-right">{product?.characteristics10}</p>
                </div>
                <div className="text-sm w-full bg-blue-100 items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Температура окружающей среды, верхний предел [°C]
                  </p>
                  <p className="text-right">{product?.characteristics11}</p>
                </div>
                <div className="text-sm w-full items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Температура окружающей среды, нижний предел [°C]
                  </p>
                  <p className="text-right">{product?.characteristics12}</p>
                </div>
                <div className="text-sm w-full bg-blue-100 items-center px-4 py-2 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Электрическое сопротивление изоляции, не менее [МОм*км]
                  </p>
                  <p className="text-right">{product?.characteristics13}</p>
                </div>
              </div>
            )}
            {/**For cabels */}

            {/**For pods */}
          </div>
          <div
            className={cn(
              "flex flex-col   collapse h-0 w-0 p-0",
              product?.detailId.includes("c") &&
                descript?.heading1 &&
                " visible w-full h-fit"
            )}
          >
            <div
              className={cn(
                "whitespace-normal flex flex-col gap-y-4 p-0 bg-blue-100  collapse",
                descript?.heading1 && "p-6 visible w-full h-fit"
              )}
            >
              <p className="text-center text-base font-semibold w-full">
                {descript?.heading1}
              </p>
              <p className="">{descript?.description1}</p>
            </div>
            <div
              className={cn(
                "whitespace-normal flex flex-col gap-y-4 p-0 bg-blue-100  collapse",
                descript?.heading2 && "p-6 visible w-full h-fit"
              )}
            >
              <p className="text-center text-base font-semibold w-full">
                {descript?.heading2}
              </p>
              <p className="">{descript?.description2}</p>
            </div>
            <div
              className={cn(
                "whitespace-normal flex flex-col gap-y-4 p-0 bg-blue-100  collapse",
                descript?.heading3 && "p-6 visible w-full h-fit"
              )}
            >
              <p className="text-center text-base font-semibold w-full">
                {descript?.heading3}
              </p>
              <p className="">{descript?.description3}</p>
            </div>
          </div>

          <div className="grid grid-flow-row xs:grid-cols-1 lg:grid-cols-3 gap-4 pt-8 w-full">
            <div className="flex flex-row justify-evenly items-center text-base">
              <p className="text-sm">Остаток: </p>{" "}
              <p
                className={cn(
                  "visible w-fit rounded-md font-bold bg-white px-4 py-3 text-blue-500",
                  product?.detailId.includes("c") && "collapse w-0"
                )}
              >
                {endBalance} шт.
              </p>
              <p
                className={cn(
                  "collapse w-0",
                  product?.detailId.includes("c") &&
                    "visible w-fit rounded-md font-bold bg-white px-4 py-3 text-blue-500"
                )}
              >
                {endBalance * 1000} м
              </p>
              {/* <p
                className={cn(
                  "collapse w-0",
                  product?.detailId.includes("c") &&
                    "visible w-fit rounded-md font-bold bg-white px-4 py-3 text-blue-500"
                )}
              >
                {detail?.value1} кг
              </p> */}
            </div>
            <div className="flex flex-row justify-evenly text-blue-500 items-center text-xl">
              <p className="font-medium text-base">
                Цена за{" "}
                <span
                  className={cn(
                    "visible w-fit",
                    product?.detailId.includes("c") && "collapse w-0"
                  )}
                >
                  {" "}
                  шт.
                </span>{" "}
                <span
                  className={cn(
                    "collapse w-0",
                    product?.detailId.includes("c") && "visible w-fit"
                  )}
                >
                  {" "}
                  м
                </span>
              </p>{" "}
              <div className="font-black flex flex-col gap-y-1 items-center px-4 py-3 text-2xl rounded-md bg-white ">
                <p>
                  {product?.detailId.includes("c")
                    ? Math.ceil(numPrice * 1.2 * 0.001)
                    : Math.ceil(numPrice * 1.35)}{" "}
                  ₸
                </p>
                <p
                  className={cn(
                    " text-white collapse h-0 w-0 text-lg flex bg-red-700 p-0 rounded-md text-center",
                    product?.detailId.includes("c") &&
                      detail?.price1 !== "" &&
                      detail?.price1 !== " " &&
                      "visible h-fit w-fit p-2"
                  )}
                >
                  распродажа {Math.ceil(numPrice1 * 1.2 * 0.001)} ₸
                </p>
              </div>
            </div>
            <div className="items-center flex justify-center text-neutral-100">
              <Link
                href={`https://api.whatsapp.com/send?phone=77773433718&text=Здравствуйте%20мне%20интересен%20товар%20https://venprom.kz/products/${product?.id}`}
                className="flex flex-row gap-x-2 bg-blue-600  transition delay-150 duration-500 rounded-lg py-3 px-8 hover:bg-sky-800  shadow-xl"
              >
                <ShoppingCart size={20} />
                Купить
              </Link>{" "}
            </div>
          </div>
          {/* <div
            className={cn(
              "border-2 border-sky-900 shadow-inner text-center shadow-xl  rounded-lg collapse w-0 h-0 flex xs:flex-col lg:flex-row gap-x-4 items-center justify-center ",
              "visible w-full h-fit p-6"
            )}
          >
            <p>Калькулятор цены: </p>
            <input
              type="text"
              placeholder="Посчитать?"
              className="bg-white border-none w-40 rounded-lg h-10 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
              onChange={(e) => setPrice(e.target.value)}
            />
            <p>
              {price === ""
                ? 0
                : parseInt(price) *
                  (product?.detailId.includes("c")
                    ? Math.ceil(numPrice * 1.2 * 0.001)
                    : Math.ceil(numPrice * 1.35))}{" "}
              ₸
            </p>
          </div> */}
        </div>
        <ClientForm />
      </div>
    </div>
  );
};

export default ProductItemPage;
