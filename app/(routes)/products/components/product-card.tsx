import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  productId: string;
  img: string;
  price: string;
  name: string;
  balance: string;
}

function ProductCard({
  productId,
  img,
  price,
  name,
  balance,
}: ProductCardProps) {
  return (
    <Link href={`/products/${productId}`}>
      <div className="w-full  relative flex flex-col h-full bg-blue-50 justify-between hover:brightness-90 transition duration-500 delay-100">
        <p className="w-full text-right px-4 absolute bg-transparent top-0">
          logo
        </p>
        <Image
          height={200}
          width={200}
          alt=""
          src={img}
          className="bg-blue-500 w-full h-fit"
        />
        <p className="px-4 py-1 text-sm uppercase">{name}</p>
        <div className="px-4 flex flex-row justify-between items-center py-2">
          <p className="text-lg font-semibold">{price} KZT</p>
          <p className="text-sm">Наличие: {balance}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;