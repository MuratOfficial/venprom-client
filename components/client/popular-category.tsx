import React from "react";
import CategoryCard from "./category-card";

function PopularCategory() {
  return (
    <div className="flex flex-col py-4 relative">
      <p className="uppercase text-2xl text-center font-semibold text-blue-600 py-8">
        Поставляем по оптовым ценам
      </p>
      <div className=" grid grid-flow-row grid-cols-2 gap-8 py-4">
        <CategoryCard img="" label="Кабели большого сечения" />
        <CategoryCard img="" label="Крупногабаритные подшипники" />
      </div>
    </div>
  );
}

export default PopularCategory;
