import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  img: string;
  label: string;
}

function CategoryCard({ img, label }: CategoryCardProps) {
  return (
    <div className="flex flex-row gap-x-4 col-span-1 py-8 transition delay-150 duration-500 cursor-pointer rounded-xl px-8 items-center justify-between bg-gradient-to-t from-blue-900 to-blue-700 hover:shadow-xl  hover:brightness-75">
      <p className="uppercase text-neutral-200 font-semibold text-2xl text-left">
        {label}
      </p>
      <Image height={200} width={100} alt={label} src={img} />
    </div>
  );
}

export default CategoryCard;
