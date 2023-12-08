import React from "react";
import CategoryCard from "./category-card";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "../animations/another-scroll";
import Link from "next/link";

function PopularCategory() {
  return (
    <div className="w-full flex flex-col relative">
      <div className=" w-full py-3 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-blue-800 inline-block relative"></div>
      <div className="flex px-48 flex-col py-4 relative w-full before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-slate-50 inline-block">
        <AnimateScrollDown>
          <p className="uppercase text-5xl text-left font-bold text-blue-900 py-8 relative">
            Поставляем по оптовым ценам
          </p>
        </AnimateScrollDown>

        <div className=" grid grid-flow-row grid-cols-2 gap-8 py-4 relative">
          <AnimateScrollDownHorizontalLeft>
            <Link href="/products">
              <CategoryCard
                img="/categoryImg/kabel.png"
                label="Кабели большого сечения"
              />
            </Link>
          </AnimateScrollDownHorizontalLeft>

          <AnimateScrollDownHorizontal>
            <Link href="/products">
              <CategoryCard
                img="/categoryImg/podship.png"
                label="Крупногабаритные подшипники"
              />
            </Link>
          </AnimateScrollDownHorizontal>
        </div>
      </div>

      <div className="bg-slate-50 absolute bottom-0 w-full py-12 -z-10"></div>
    </div>
  );
}

export default PopularCategory;
