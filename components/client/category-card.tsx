import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  img: string;
  label: string;
}

function CategoryCard({ img, label }: CategoryCardProps) {
  return (
    <div className="flex group flex-row gap-x-4 col-span-1 py-8 transition delay-150 duration-500 cursor-pointer rounded-xl px-8 items-center justify-between bg-slate-600  hover:shadow-xl  hover:bg-slate-900">
      <p className="uppercase text-neutral-200 font-semibold text-2xl text-left">
        {label}
      </p>
      <Image
        height={200}
        width={100}
        alt={label}
        src={img}
        className="group-hover:scale-105 transition delay-150 duration-500"
      />
    </div>
  );
}

export default CategoryCard;
