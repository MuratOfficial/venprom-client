import React from "react";
import {
  AnimateScrollDownHorizontal,
  AnimateScrollDownHorizontalLeft,
} from "../animations/another-scroll";
import AnimateFadeIn from "../animations/fade-in";
import Image from "next/image";
import { Container } from "lucide-react";
import Link from "next/link";

function ProductLinks() {
  const imgList = ["/indImg/1png3d.png", "/3png3d.png", "/2png3d.png"];
  return (
    <div className="flex  flex-col w-full relative w-full relative">
      <div className="py-4 w-full before:block before:absolute before:-inset-1 before:skew-y-3  before:bg-[#bbb157] inline-block relative"></div>
      <div className="lg:py-10 xs:py-4 xxs:py-4 xxs:px-4 xs:px-4 lg:px-48 grid xs:grid-cols-1 lg:grid-cols-2 gap-6 justify-between items-center rounded-lg  w-full before:block before:absolute before:-inset-1 before:skew-y-3 inline-block relative">
        <p className="xs:text-sm xxs:text-sm lg:text-2xl font-semibold flex items-center col-span-1 text-right text-sky-800 uppercase w-full h-full relative">
          Оказываем услуги по комплексному оснащению (снабжению) промышленных
          предприятий
        </p>
        <div className="lg:w-full xs:w-full h-fit flex flex-row justify-center items-center">
          <Image
            width={900}
            height={540}
            alt="prtret4"
            src="/indImg/portret4.jpg"
          />
        </div>
      </div>
      <div
        className="flex flex-col xs:gap-y-1 xxs:gap-y-1 lg:gap-y-8 xs:px-4 xxs:px-4 lg:px-48 items-center xs:py-1 xxs:py-1 lg:py-4 xxs:bg-bottom xs:bg-bottom lg:bg-left bg-contain bg-no-repeat"
        style={{ backgroundImage: `url("/indImg/portret1.jpg")` }}
      >
        <div className="w-full flex flex-row justify-center">
          <AnimateScrollDownHorizontal>
            <p className="w-fit flex flex-row gap-x-4 font-bold text-center text-sky-800 xxs:text-xl xs:text-xl lg:text-3xl uppercase font-semobold">
              Поставляем <Container size={35} />
            </p>
          </AnimateScrollDownHorizontal>
        </div>

        <AnimateScrollDownHorizontalLeft>
          <div className="grid pb-4 grid-flow-row xs:grid-cols-1 xxs:grid-cols-1 lg:grid-cols-3 gap-4 xs:text-sm xxs:text-sm lg:text-sm">
            <ul className="flex flex-col gap-y-3">
              <Link
                href="https://wa.link/0m0xhf"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Электротехническую продукцию
              </Link>
              <Link
                href="https://wa.link/0f35l9"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Приборы КИП и А
              </Link>
              <Link
                href="https://wa.link/githjw"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Светотехническую продукцию
              </Link>
              <Link
                href="https://wa.link/9h7b2l"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Запасные части к экскаваторам и прочей спецтехнике
              </Link>
              <Link
                href="https://wa.link/bitf4s"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Грузоподъёмное оборудование и запчасти к ним
              </Link>
              <Link
                href="https://wa.link/d9d8ra"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Резинотехнические изделия
              </Link>
            </ul>
            <ul className="flex flex-col gap-y-3">
              <Link
                href="https://wa.link/yhbzqj"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Спецодежду и обувь
              </Link>
              <Link
                href="https://wa.link/kdm89u"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Средства индивидуальной защиты
              </Link>
              <Link
                href="https://wa.link/ry09at"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Электрический и ручной инструменты
              </Link>
              <Link
                href="https://wa.link/ow68n6"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Электроизоляционные материалы
              </Link>
              <Link
                href="https://wa.link/8e6pna"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Асбестотехнические материалы
              </Link>
              <Link
                href="https://wa.link/lbm0v3"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Теплоизоляционные материалы
              </Link>
            </ul>
            <ul className="flex flex-col gap-y-3">
              <Link
                href="https://wa.link/1qhjvo"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Промышленные насосы
              </Link>
              <Link
                href="https://wa.link/rz4w48"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Вентиляционное и отопительное оборудование
              </Link>
              <Link
                href="https://wa.link/r65c0j"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Трубопроводную арматуру
              </Link>
              <Link
                href="https://wa.link/40c642"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Гидравлику
              </Link>
              <Link
                href="https://wa.link/ywlwob"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Приводную технику и ремни
              </Link>
              <Link
                href="https://wa.link/rlui07"
                className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-slate-50 bg-opacity-80 text-sky-800 border-sky-800 cursor-pointer hover:bg-sky-800 transition delay-100 duration-300 hover:text-neutral-200"
              >
                Конвейерные ленты
              </Link>
            </ul>
          </div>
        </AnimateScrollDownHorizontalLeft>
      </div>
    </div>
  );
}

export default ProductLinks;
