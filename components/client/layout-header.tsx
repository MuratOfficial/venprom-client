import { MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LayoutHeader() {
  return (
    <div className="  flex flex flex-col w-full relative ">
      <div className="bg-slate-50 absolute top-0 w-full py-12"></div>
      <div className="lg:px-48 xs:px-4 flex xs:flex-col lg:flex-row h-fit py-2  w-full justify-between xs:items-center lg:items-start before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-50 inline-block relative">
        <div className="xs:w-10 lg:w-fit items-center h-fit relative text-blue-900">
          <Image height={120} width={120} alt="logo" src="logo.svg" />
        </div>
        <div className="flex flex-col relative xs:space-x-0 items-center lg:space-x-12 text-blue-900 max-w-[560px]">
          <p className="font-bold xs:text-sm lg:text-lg xs:text-center lg:text-left  w-fit">
            ТОО &ldquo;Венпром&rdquo;
          </p>
          <div className="flex flex-row">
            <div className="flex flex-col items-center justify-between xs:w-48 lg:w-fit px-4">
              <p className="xs:text-xs lg:text-sm xs:text-center lg:text-left font-semibold w-fit">
                Поставляем по оптовым ценам:
              </p>
              <ul className="xs:text-xs lg:text-sm xs:text-center lg:text-left w-fit">
                <li> Кабели большого сечения</li>
                <li> Крупногабаритные подшипники</li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center lg:w-fit xs:w-32">
              <p className="xs:text-xs lg:text-sm flex items-center text-left font-semibold xs:32 lg:w-60">
                Оказываем услуги по комплексному оснащению предприятий
              </p>
            </div>
          </div>
        </div>
        <div className="xs:py-1 lg:py-4 px-8 text-neutral-50 flex flex-col gap-y-1 w-fit relative bg-[#bbb157] rounded-lg relative">
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
