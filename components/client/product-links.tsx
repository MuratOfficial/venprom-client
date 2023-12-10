import React from "react";
import {
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "../animations/another-scroll";
import AnimateFadeIn from "../animations/fade-in";
import Image from "next/image";
import { Container } from "lucide-react";

function ProductLinks() {
  const imgList = ["/indImg/1png3d.png", "/3png3d.png", "/2png3d.png"];
  return (
    <div className="flex  flex-col w-full relative w-full relative">
      <div className="py-4 w-full before:block before:absolute before:-inset-1 before:skew-y-3  before:bg-[#bbb157] inline-block relative"></div>
      <div className="py-10 px-48 grid grid-cols-2 gap-6 justify-between items-center rounded-lg  w-full before:block before:absolute before:-inset-1 before:skew-y-3 inline-block relative">
        <p className="text-2xl font-semibold flex items-center col-span-1 text-right text-sky-800 uppercase w-full h-full relative">
          Оказываем услуги по комплексному оснащению (снабжению) промышленных
          предпрятий
        </p>
        <div className="w-full h-fit flex flex-row justify-center items-center">
          <Image
            width={200}
            height={200}
            alt="prtret4"
            src="/indImg/portret4.jpg"
          />
        </div>
      </div>
      <div
        className="flex flex-col gap-y-8 px-48 items-center py-4 bg-left bg-contain bg-no-repeat"
        style={{ backgroundImage: `url("/indImg/portret1.jpg")` }}
      >
        <div className="w-full flex flex-row justify-center">
          <AnimateScrollDownHorizontal>
            <p className="w-fit flex flex-row gap-x-4 font-bold text-center text-sky-800 text-3xl uppercase font-semobold">
              Поставляем <Container size={35} />
            </p>
          </AnimateScrollDownHorizontal>
        </div>

        <AnimateScrollDownHorizontalLeft>
          <div className="grid pb-4 grid-flow-row grid-cols-3 gap-4 text-sm">
            <ul className="flex flex-col gap-y-3">
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Электротехническую продукцию
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Приборы КИП и А
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Светотехническую продукцию
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Запасные части к экскаваторам и прочей спецтехнике
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Грузоподъёмное оборудование и запчасти к ним
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Резинотехнические изделия
              </li>
            </ul>
            <ul className="flex flex-col gap-y-3">
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Спецодежду и обувь
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Средства индивидуальной защиты
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Электрический и ручной инструменты
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Электроизоляционные материалы
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Асбестотехнические материалы
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Теплоизоляционные материалы
              </li>
            </ul>
            <ul className="flex flex-col gap-y-3">
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Промышленные насосы
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Вентиляционное и отопительное оборудование
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Трубопроводную арматуру
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Гидравлику
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Приводную технику и ремни
              </li>
              <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200">
                Конвейерные ленты
              </li>
            </ul>
          </div>
        </AnimateScrollDownHorizontalLeft>
      </div>
    </div>
  );
}

export default ProductLinks;
