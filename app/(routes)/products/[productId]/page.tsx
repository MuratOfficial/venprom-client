import ClientNav from "@/components/client/client-nav";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductItemPage({ params }: { params: { productId: string } }) {
  return (
    <div className="h-full w-full flex flex-col h-min-screen">
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
        <p>/CategoryName/</p>
        <ChevronRight size={15} />
        <Link
          href={`/products/${params.productId}`}
          className="hover:text-blue-600 font-semibold"
        >
          {params.productId}
        </Link>
      </div>
      <div className="px-48">
        <div className="bg-blue-50 rounded-lg w-full h-full py-8 px-8 flex flex-col gap-y-6">
          <p className="text-3xl font-semibold uppercase">{params.productId}</p>
          <div className="flex flex-row justify-between">
            <Image
              height={200}
              width={200}
              alt=""
              src=""
              className="bg-blue-500 w-[360px] h-[360px]"
            />
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            perspiciatis numquam molestias corporis praesentium dolorum deserunt
            esse repellendus impedit eius, harum iure ipsam cumque quod vitae
            facilis explicabo, voluptatem laudantium. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Iusto perspiciatis numquam
            molestias corporis praesentium dolorum deserunt esse repellendus
            impedit eius, harum iure ipsam cumque quod vitae facilis explicabo,
            voluptatem laudantium. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Iusto perspiciatis numquam molestias corporis
            praesentium dolorum deserunt esse repellendus impedit eius, harum
            iure ipsam cumque quod vitae facilis explicabo, voluptatem
            laudantium.
          </p>
          <div className="grid grid-flow-row grid-cols-3 gap-4 pt-8 w-full">
            <div className="flex flex-row justify-evenly items-center text-xl">
              <p>Остаток: </p> <p>0</p>
            </div>
            <div className="flex flex-row justify-evenly items-center text-xl">
              <p>Цена</p> <p>20000 KZT</p>
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
      </div>
    </div>
  );
}

export default ProductItemPage;