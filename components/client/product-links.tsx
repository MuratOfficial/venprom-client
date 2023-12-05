import React from "react";

function ProductLinks() {
  const imgList = ["/indImg/1png3d.png", "/3png3d.png", "/2png3d.png"];
  return (
    <div className="flex  flex-col w-full relative w-full ">
      <div className="py-12 px-48 flex flex-row justify-between items-center rounded-lg  w-full before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-l before:from-slate-900 before:to-blue-900 inline-block relative">
        <p className="text-2xl font-semibold text-left text-neutral-100 uppercase w-full h-full relative">
          Оказываем услуги по комплексному оснащению (снабжению) промышленных
          предпрятий
        </p>
      </div>
      <div
        className="flex flex-col gap-y-8 px-48 items-center py-4 bg-left bg-contain bg-no-repeat"
        style={{ backgroundImage: `url("/indImg/portret1.jpg")` }}
      >
        <p className="w-full font-semibold text-right text-slate-800 text-4xl uppercase font-semobold">
          Товары к поставке
        </p>
        <div className="grid geid-flow-row grid-cols-3 gap-4">
          <ul className="flex flex-col gap-y-3">
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электротехническая продукция
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электрооборудование
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Светотехническая продукция
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Запасные чсвник эксковаторам и спецтехнике
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Грузоподьемные оборудование
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Резинотехнические изделия
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Спецодежда и обувь
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Средства индивидуальной защиты
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электрический и ручной инструмент
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электроизоляционные материалы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Грузоподьемные оборудование
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Асбесттехнические материалы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Теплоизоляционное материалы
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Промышленные насосы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Вентиляторы и насосы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Трубопроводная арматура
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Гидравлика
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Приводная техника
            </li>
            <li className="px-4 py-2 rounded-lg border-2 shadow-2xl bg-white bg-opacity-80 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Вентиляционная и отопительнле оборудования
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductLinks;
