import ClientForm from "@/components/client/client-form";
import ClientNav from "@/components/client/client-nav";
import { cn } from "@/lib/utils";
import getCategories from "@/services/get-categories";
import getProducts from "@/services/get-products";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductItemPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const cabelsUrl =
    "http://localhost:3000/api/510b3e4f-9539-4d5a-90c8-ced6b6ba8cdd";

  const podUrl =
    "http://localhost:3000/api/17bf9dbd-132c-46ec-84aa-aec56ddee0f0";
  const cabelproducts = await getProducts(`${cabelsUrl}/products`);
  const podProducts = await getProducts(`${podUrl}/products`);
  const cabelCategories = await getCategories(`${cabelsUrl}/categories`);

  const podCategories = await getCategories(`${podUrl}/categories`);

  const data = [...cabelproducts, ...podProducts];
  const categories = [...cabelCategories, ...podCategories];

  const product = data.findLast((el) => el.id === params.productId);
  const descript = categories.findLast(
    (el) => el.name === product?.category.name
  )?.description1;
  return (
    <div className="h-full w-full flex flex-col h-min-screen">
      <div className="absolute w-full bg-blue-800  h-40 top-16 -z-10" />
      <ClientNav />
      <div className="h-8 w-full text-left py-8 flex flex-row items-center px-48 gap-x-4 text-slate-800 text-sm ">
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
      <div className="px-48 flex flex-col gap-y-8">
        <div className="bg-blue-50 rounded-lg w-full h-full py-8 px-8 flex flex-col gap-y-10">
          <p className="text-3xl font-semibold uppercase">{product?.name}</p>
          {/**Content Description */}
          <div className="grid grid-flow-row-dense grid-cols-2 gap-4 grid-rows-auto">
            <div className="flex flex-col gap-y-4 items-center justify-center">
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

            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-left">
                <p className="dropdown-shadow-sm py-6 w-full text-center text-lg font-semibold">
                  Характеристики
                </p>
                <div className="text-sm bg-blue-100 w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Влажность воздуха при 35° C [%]</p>
                  <p className="text-right">{product?.characteristics1}</p>
                </div>
                <div className="text-sm  w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Гарантийный срок эксплуатации [месяц]</p>
                  <p className="text-right">{product?.characteristics2}</p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Испытательное переменное напряжение частотой 50 Гц, 5 мин.
                    [кВ]
                  </p>
                  <p className="text-right">{product?.characteristics3}</p>
                </div>
                <div className="text-sm  w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Максимальная рабочая температура жилы при перегрузке [°С]
                  </p>
                  <p className="text-right">{product?.characteristics4}</p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Максимальная рабочая температура жилы [°С]</p>
                  <p className="text-right">{product?.characteristics5}</p>
                </div>
                <div className="text-sm  w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Монтаж при температуре, не ниже [°C]</p>
                  <p className="text-right">{product?.characteristics6}</p>
                </div>
                <div className="text-sm bg-blue-100 w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Номинальное переменное напряжение частотой 50 Гц [кВ]
                  </p>
                  <p className="text-right">{product?.characteristics7}</p>
                </div>
                <div className="text-sm w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Номинальное постоянное напряжение [кВ]</p>
                  <p className="text-right">{product?.characteristics8}</p>
                </div>
                <div className="text-sm w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Радиус изгиба кабелей [наружных диаметров]</p>
                  <p className="text-right">{product?.characteristics9}</p>
                </div>
                <div className="text-sm w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">Разность уровней, не более [м]</p>
                  <p className="text-right">{product?.characteristics10}</p>
                </div>
                <div className="text-sm w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Температура окружающей среды, верхний предел [°C]
                  </p>
                  <p className="text-right">{product?.characteristics11}</p>
                </div>
                <div className="text-sm w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Температура окружающей среды, нижний предел [°C]
                  </p>
                  <p className="text-right">{product?.characteristics12}</p>
                </div>
                <div className="text-sm w-full items-center px-4 h-16 grid grid-flow-row grid-cols-2 gap-4">
                  <p className="">
                    Электрическое сопротивление изоляции, не менее [МОм*км]
                  </p>
                  <p className="text-right">{product?.characteristics13}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="whitespace-normal p-4 bg-blue-100">{descript}</p>
          <div className="grid grid-flow-row grid-cols-3 gap-4 pt-8 w-full">
            <div className="flex flex-row justify-evenly items-center text-xl">
              <p>Остаток: </p> <p>0</p>
            </div>
            <div className="flex flex-row justify-evenly items-center text-xl">
              <p>Цена</p> <p className="font-bold">20000 KZT</p>
            </div>
            <div className="items-center flex justify-center text-neutral-100">
              <button className="flex flex-row gap-x-2 bg-blue-600  transition delay-150 duration-500 rounded-lg py-3 px-8 hover:bg-sky-800  shadow-xl">
                <ShoppingCart size={20} />
                Купить
              </button>{" "}
            </div>
          </div>
          <div className="border-2 border-sky-900 shadow-inner text-center shadow-xl p-6 rounded-lg w-full flex flex-row gap-x-4 items-center justify-center">
            <p>Калькулятор массы: </p>
            <input
              type="text"
              placeholder="Длина в км"
              className="bg-white border-none w-40 rounded-lg h-10 ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 px-2"
            />
            <p>4546546 kg</p>
          </div>
        </div>
        <ClientForm />
      </div>
    </div>
  );
};

export default ProductItemPage;
