import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  img: string;
  label: string;
}

function CategoryCard({ img, label }: CategoryCardProps) {
  return (
    <div className="flex group h-full text-neutral-200 flex-col xs:gap-y-4 lg:gap-y-16 col-span-1 xs:py-4 lg:py-8 transition delay-150 duration-1000 cursor-pointer rounded-xl px-8 items-center justify-between bg-[#bbb157] shadow-xl  hover:bg-neutral-100 hover:text-[#bbb157]">
      <Image
        height={200}
        width={200}
        alt={label}
        src={img}
        className="group-hover:scale-105 transition delay-150 duration-500"
      />
      <p className="uppercase  font-semibold text-2xl text-center">{label}</p>
    </div>
  );
}

export default CategoryCard;
