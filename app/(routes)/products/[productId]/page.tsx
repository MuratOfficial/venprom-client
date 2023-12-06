import ClientForm from "@/components/client/client-form";
import ClientNav from "@/components/client/client-nav";
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
    "http://localhost:3000/api/a14e50a2-95bc-4c0b-bc24-6bbefd1cf178";

  const podUrl =
    "http://localhost:3000/api/a14e50a2-95bc-4c0b-bc24-6bbefd1cf178";
  const cabelproducts = await getProducts(`${cabelsUrl}/products`);
  const podProducts = await getProducts(`${podUrl}/products`);
  const cabelCategories = await getCategories(`${cabelsUrl}/categories`);

  const podCategories = await getCategories(`${podUrl}/categories`);

  const data = [...cabelproducts, ...podProducts];
  const categories = [...cabelCategories, ...podCategories];

  const product = data.findLast((el) => el.id === params.productId);
  const descript = categories.findLast(
    (el) => el.name === product?.category.name
  )?.description;
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
          <div className="flex flex-row justify-between">
            <div className="flex items-center w-[360px] h-[360px]">
              <Image
                height={400}
                width={400}
                alt=""
                src={product?.images[0].url || ""}
              />
            </div>

            <div className="flex flex-col text-left">
              <div className=" bg-blue-100 w-[480px] items-center px-4 h-16 grid grid-flow-row grid-cols-2">
                <p>Text1</p>
                <p>Text2</p>
              </div>
              <div className="  w-[480px] items-center px-4 h-16 grid grid-flow-row grid-cols-2">
                <p>Text1</p>
                <p>Text2</p>
              </div>
              <div className=" bg-blue-100 w-[480px] items-center px-4 h-16 grid grid-flow-row grid-cols-2">
                <p>Text1</p>
                <p>Text2</p>
              </div>
              <div className="  w-[480px] items-center px-4 h-16 grid grid-flow-row grid-cols-2">
                <p>Text1</p>
                <p>Text2</p>
              </div>
              <div className=" bg-blue-100 w-[480px] items-center px-4 h-16 grid grid-flow-row grid-cols-2">
                <p>Text1</p>
                <p>Text2</p>
              </div>
              <div className="  w-[480px] items-center px-4 h-16 grid grid-flow-row grid-cols-2">
                <p>Text1</p>
                <p>Text2</p>
              </div>
            </div>
          </div>
          <p>{descript}</p>
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
