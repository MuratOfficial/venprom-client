import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  img: string;
  label: string;
}

function CategoryCard({ img, label }: CategoryCardProps) {
  return (
    <div className="flex group h-full text-neutral-200 flex-col xs:gap-y-4 xxs:gap-y-2 lg:gap-y-16 col-span-1 xxs:py-2 xs:py-4 lg:py-8 transition delay-150 duration-1000 cursor-pointer rounded-xl xxs:px-0 xs:px-8 lg:px-8 items-center justify-between bg-[#bbb157] shadow-xl  hover:bg-neutral-100 hover:text-[#bbb157]">
      <Image
        height={200}
        width={200}
        alt={label}
        src={img}
        className="group-hover:scale-105  transition delay-150 duration-500"
      />
      <p className="uppercase  font-semibold lg:text-2xl xs:text-2xl xxs:text-xl text-center">
        {label}
      </p>
    </div>
  );
}

export default CategoryCard;
