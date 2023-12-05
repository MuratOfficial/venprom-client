import {
  ArrowBigRight,
  CheckSquare,
  Cog,
  FileCheck,
  PenSquare,
  Truck,
} from "lucide-react";
import React from "react";

function ProcessChain() {
  return (
    <div className="flex flex-col px-48 items-center gap-y-8 w-full py-8 before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-gradient-to-r before:from-slate-900 before:to-blue-900 inline-block relative">
      <p className="uppercase text-4xl py-6 text-left w-full font-semibold text-neutral-100 relative">
        Схема работы
      </p>
      <div className="flex flex-row items-center gap-x-8 relative">
        <div className="border-neutral-200 border-4 px-8 py-4 rounded-lg text-neutral-200 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Прием заявки
          </p>
          <PenSquare size={50} className="absolute bottom-4 right-4" />
        </div>
        <ArrowBigRight size={50} color="white" />
        <div className="border-neutral-200 border-4 px-8 py-4 rounded-lg text-neutral-200 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Обработка заявки
          </p>
          <Cog size={50} className="absolute bottom-4 right-4" />
        </div>
        <ArrowBigRight size={50} color="white" />
        <div className="border-neutral-200 border-4 px-8 py-4 rounded-lg text-neutral-200 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Составление КП
          </p>
          <CheckSquare size={50} className="absolute bottom-4 right-4" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-8 relative">
        <ArrowBigRight size={50} color="white" />
        <div className="border-neutral-200 border-4 px-8 py-4 rounded-lg text-neutral-200 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Заключение договора
          </p>
          <FileCheck size={50} className="absolute bottom-4 right-4" />
        </div>
        <ArrowBigRight size={50} color="white" />
        <div className="border-neutral-200 border-4 px-8 py-4 rounded-lg text-neutral-200 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Поставка
          </p>
          <Truck size={50} className="absolute bottom-4 right-4" />
        </div>
      </div>
    </div>
  );
}

export default ProcessChain;
