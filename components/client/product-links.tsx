import React from "react";

function ProductLinks() {
  return (
    <div className="flex flex-col w-full relative">
      <p className="py-4 px-6 bg-slate-300 bg-opacity-80 rounded-lg text-xl text-center w-full">
        Оказываем услуги по комплексному оснащению (снабжению) промышленных
        предпрятий
      </p>
      <div className="flex flex-col gap-y-4  items-center py-4">
        <p className="w-fit text-center text-xl uppercase font-semobold">
          Товары к поставке
        </p>
        <div className="grid geid-flow-row grid-cols-3 gap-4">
          <ul className="flex flex-col gap-y-3">
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электротехническая продукция
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электрооборудование
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Светотехническая продукция
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Запасные чсвник эксковаторам и спецтехнике
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Грузоподьемные оборудование
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Резинотехнические изделия
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Спецодежда и обувь
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Средства индивидуальной защиты
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электрический и ручной инструмент
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Электроизоляционные материалы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Грузоподьемные оборудование
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Асбесттехнические материалы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Теплоизоляционное материалы
            </li>
          </ul>
          <ul className="flex flex-col gap-y-3">
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Промышленные насосы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Вентиляторы и насосы
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Трубопроводная арматура
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Гидравлика
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Приводная техника
            </li>
            <li className="px-4 py-2 rounded-lg border-2 border-slate-800 cursor-pointer hover:bg-slate-800 transition delay-100 duration-300 hover:text-neutral-200">
              Вентиляционная и отопительнле оборудования
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductLinks;
