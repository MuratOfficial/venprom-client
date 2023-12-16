import useProducts from "@/hooks/use-products";
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
  const currentStore = useProducts().activeStore;

  const newPrice = parseFloat(price.replace(/,/g, ".")).toFixed(10);
  const numPrice: number = Math.ceil(
    (parseFloat(newPrice) / 1000) * 5.1 * 1.12
  );
  const numBalance = parseFloat(balance.replace(/,/g, ".")).toFixed(10);
  const endBalance: number = parseFloat(numBalance);

  return (
    <div className="xs:w-[180px] lg:w-full   relative flex flex-col xs:h-[340px] lg:h-[420px] bg-blue-50 justify-between hover:brightness-95 transition duration-500 delay-100">
      <Image
        width={40}
        height={40}
        alt="logo"
        src="logo.svg"
        className="w-20 text-right px-4 absolute bg-transparent top-0 right-0"
      />

      <div
        className="xs:w-[180px] lg:w-full xs:h-[220px] lg:h-[280px] bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="flex flex-col text-blue-950 py-2">
        <p className="xs:px-2 lg:px-6 xs:py-0 lg:py-2 xs:text-sm lg:text-center xs:text-center lg:text-lg font-medium uppercase">
          {name}
        </p>
        <div className="lg:px-6 xs:px-2 flex xs:flex-col lg:flex-row justify-evenly items-center py-2">
          {!Number.isNaN(numPrice) ? (
            <p className="xs:text-base lg:text-xl font-bold">
              {currentStore === "Кабели"
                ? Math.ceil(numPrice * 1.2)
                : Math.ceil(numPrice * 1.35)}{" "}
              {currentStore === "Кабели" ? (
                <span>₸/м</span>
              ) : <span>₸/шт</span> || currentStore === "" ? (
                <span>₸</span>
              ) : (
                <span></span>
              )}
            </p>
          ) : (
            <span className="text-sm">Цену уточняйте</span>
          )}

          {!Number.isNaN(endBalance) ? (
            <p className="text-sm">
              Наличие:{" "}
              {currentStore === "Кабели" ? endBalance * 1000 : endBalance}{" "}
              {currentStore === "Кабели" ? (
                <span>м</span>
              ) : <span>шт</span> || currentStore === "" ? (
                <span>м/шт</span>
              ) : (
                <span></span>
              )}
            </p>
          ) : (
            <span className="text-sm">Н/о</span>
          )}
        </div>
        <div className="px-4 flex xs:gap-x-4 flex-row justify-evenly items-center py-2 ">
          <Link
            href={`/products/${productId}`}
            className="xs:py-1 lg:py-2 xs:px-2 font-medium lg:px-6 xs:text-xs lg:text-base transition delay-100 duration-500 border-2 border-blue-800 xs:rounded-lg lg:rounded-sm text-center w-fit text-blue-800 hover:text-blue-50  hover:bg-blue-800"
          >
            Подробнее
          </Link>
          <Link
            href={`https://api.whatsapp.com/send?phone=77773433718&text=Здравствуйте%20мне%20интересен%20товар%20https://venprom.kz/products/${productId}`}
            className="xs:py-0 lg:py-2 xs:px-2 lg:px-4 xs:text-xs lg:text-base transition delay-100 duration-500 bg-blue-50 border-2 border-[#bbb157] xs:rounded-lg lg:rounded-sm text-center w-fit  text-[#bbb157]  hover:bg-[#bbb157] hover:text-blue-50"
          >
            <ShoppingCart className="lg:w-6 xs:w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
