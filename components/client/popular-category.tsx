import React from "react";
import CategoryCard from "./category-card";

function PopularCategory() {
  return (
    <div className="px-48 grid grid-flow-row grid-cols-2 gap-8 py-12">
      <CategoryCard />
      <CategoryCard />
    </div>
  );
}

export default PopularCategory;
