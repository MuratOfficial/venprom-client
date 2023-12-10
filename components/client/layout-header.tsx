import { MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LayoutHeader() {
  return (
    <div className="  flex flex flex-col w-full relative ">
      <div className="bg-slate-50 absolute top-0 w-full py-12"></div>
      <div className="px-48 flex flex-row h-fit py-2  w-full justify-between items-start before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-50 inline-block relative">
        <div className="text-4xl uppercase relative text-blue-900">
          <Image height={120} width={120} alt="logo" src="logo.svg" />
        </div>
        <div className="flex flex-row relative justify-between text-blue-900 max-w-[560px]">
          <div className="flex flex-col items-start justify-between w-fit ">
            <p className="font-bold text-lg text-left w-fit">
              ТОО &ldquo;Венпром&rdquo;
            </p>
            <p className="text-sm flex items-center text-left font-semibold w-60">
              Оказываем услуги по комплексному оснащению предприятий
            </p>
          </div>
          <div className="flex flex-col items-start justify-center w-fit">
            <p className="text-sm text-left font-semibold w-fit">
              Поставляем по оптовым ценам:
            </p>
            <ul className="text-sm text-left w-fit">
              <li> Кабели большого сечения</li>
              <li> Крупногабаритные подшипники</li>
            </ul>
          </div>
        </div>
        <div className="py-4 px-8 text-neutral-50 flex flex-col gap-y-1 w-fit relative bg-[#bbb157] rounded-lg relative">
          <p className="text-xs relative w-fit">Связаться с нами:</p>
          <p className="text-xs flex flex-row gap-x-2 relative w-fit">
            <PhoneCall size={12} /> +7 705 752 71 51
          </p>
          <p className="text-xs flex flex-row gap-x-2 relative w-fit">
            <PhoneCall size={12} /> +7 777 343 37 18
          </p>
        </div>
      </div>
    </div>
  );
}

export default LayoutHeader;
