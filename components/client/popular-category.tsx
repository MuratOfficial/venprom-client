import React from "react";
import CategoryCard from "./category-card";

function PopularCategory() {
  return (
    <div className="flex px-48 flex-col py-4 relative w-full before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-white inline-block">
      <p className="uppercase text-4xl text-left font-semibold text-slate-800 py-8 relative">
        Поставляем по оптовым ценам
      </p>
      <div className=" grid grid-flow-row grid-cols-2 gap-8 py-4 relative">
        <CategoryCard
          img="/categoryImg/kabel.png"
          label="Кабели большого сечения"
        />
        <CategoryCard
          img="/categoryImg/podship.png"
          label="Крупногабаритные подшипники"
        />
      </div>
    </div>
  );
}

export default PopularCategory;
