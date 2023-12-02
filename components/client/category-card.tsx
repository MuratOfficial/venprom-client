import React from "react";

function CategoryCard() {
  return (
    <div className="flex flex-row col-span-1 py-8 transition delay-150 duration-500 cursor-pointer rounded-xl px-8 items-center justify-between bg-gradient-to-t from-blue-600 to-blue-900 hover:scale-105">
      <p className="uppercase text-neutral-200 font-semibold text-2xl text-left">
        CategoryCard
      </p>
    </div>
  );
}

export default CategoryCard;
