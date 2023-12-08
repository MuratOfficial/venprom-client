import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  img: string;
  label: string;
}

function CategoryCard({ img, label }: CategoryCardProps) {
  return (
    <div className="flex group h-full flex-row gap-x-4 col-span-1 py-8 transition delay-150 duration-500 cursor-pointer rounded-xl px-8 items-center justify-between bg-blue-600  hover:shadow-xl  hover:bg-blue-900">
      <p className="uppercase text-neutral-200 font-semibold text-2xl text-left">
        {label}
      </p>
      <Image
        height={100}
        width={100}
        alt={label}
        src={img}
        className="group-hover:scale-125 transition delay-150 duration-500"
      />
    </div>
  );
}

export default CategoryCard;
