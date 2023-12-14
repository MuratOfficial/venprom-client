import React from "react";
import CategoryCard from "./category-card";
import {
  AnimateScrollDown,
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "../animations/another-scroll";
import Link from "next/link";
import { BadgePercent } from "lucide-react";

function PopularCategory() {
  return (
    <div className="w-full  flex flex-col relative">
      <div className=" w-full py-3 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-[#271fc6] inline-block relative"></div>
      <div className="flex xs:px-4 lg:px-48 xs:h-full lg:h-screen flex-col py-4 relative w-full before:block before:absolute before:-inset-1 before:skew-y-3  before:bg-[#271fc6]  inline-block">
        <AnimateScrollDown>
          <p className="uppercase text-3xl items-center justify-center flex flex-row gap-x-4 text-center font-bold text-neutral-100 py-8 relative">
            Поставляем по оптовым ценам{" "}
            <BadgePercent size={35} className="lg:visible xs:collapse" />
          </p>
        </AnimateScrollDown>

        <div className=" grid grid-flow-row xs:grid-cols-1 lg:grid-cols-2 gap-8 py-4 relative">
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
