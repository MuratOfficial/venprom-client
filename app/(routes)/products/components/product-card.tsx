import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  productId: string;
  img: string;
  price: string;
  name: string;
  balance: string;
  detailId: string;
}

function ProductCard({
  productId,
  img,
  price,
  name,
  balance,
  detailId,
}: ProductCardProps) {
  return (
    <div className="w-full   relative flex flex-col h-[420px] bg-blue-50 justify-between hover:brightness-95 transition duration-500 delay-100">
      <Image
        width={40}
        height={40}
        alt="logo"
        src="logo.svg"
        className="w-20 text-right px-4 absolute bg-transparent top-0 right-0"
      />

      <div
        className="w-full h-[280px] bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="flex flex-col text-blue-950 py-2">
        <p className="px-6 py-2 text-lg font-medium uppercase">{name}</p>
        <div className="px-6 flex flex-row justify-between items-center py-2">
          <p className="text-xl font-bold">{price} ₸</p>
          <p className="text-sm">Наличие: {balance}</p>
        </div>
        <div className="px-4 flex flex-row justify-evenly items-center py-2 ">
          <Link
            href={`/products/${productId}`}
            className="py-2 px-6 text-base transition delay-100 duration-500 border-2 border-blue-800 rounded-sm text-center w-fit text-blue-800 hover:text-blue-50  hover:bg-blue-800"
          >
            Подробнее
          </Link>
          <Link
            href={`/products/${productId}`}
            className="py-2 px-6 text-base transition delay-100 duration-500 bg-blue-50 border-2 border-[#bbb157] rounded-sm text-center w-fit  text-[#bbb157]  hover:bg-[#bbb157] hover:text-blue-50"
          >
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
