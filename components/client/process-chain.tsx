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
    <div className="flex flex-col px-48 items-center gap-y-8 py-8 relative">
      <p className="uppercase text-2xl text-center font-semibold text-blue-600">
        Схема работы
      </p>
      <div className="flex flex-row items-center gap-x-8">
        <div className="border-slate-800 border-4 px-8 py-4 rounded-lg text-slate-800 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Прием заявки
          </p>
          <PenSquare size={50} className="absolute bottom-4 right-4" />
        </div>
        <ArrowBigRight size={50} color="#334155" />
        <div className="border-slate-800 border-4 px-8 py-4 rounded-lg text-slate-800 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Обработка заявки
          </p>
          <Cog size={50} className="absolute bottom-4 right-4" />
        </div>
        <ArrowBigRight size={50} color="#334155" />
        <div className="border-slate-800 border-4 px-8 py-4 rounded-lg text-slate-800 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Составление КП
          </p>
          <CheckSquare size={50} className="absolute bottom-4 right-4" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-8">
        <ArrowBigRight size={50} color="#334155" />
        <div className="border-slate-800 border-4 px-8 py-4 rounded-lg text-slate-800 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
          <p className="font-semibold text-lg text-left absolute uppercase top-4 left-4">
            Заключение договора
          </p>
          <FileCheck size={50} className="absolute bottom-4 right-4" />
        </div>
        <ArrowBigRight size={50} color="#334155" />
        <div className="border-slate-800 border-4 px-8 py-4 rounded-lg text-slate-800 relative shadow-2xl flex flex-col items-center w-60 h-40 justify-center">
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
