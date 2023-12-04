import Link from "next/link";
import React from "react";

function LayoutHeader() {
  return (
    <div className="  flex flex flex-col w-full ">
      <div className="px-48 flex flex-row h-fit w-full justify-between items-start before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white inline-block relative">
        <div className="text-4xl uppercase relative">Logo</div>
        <div className="flex flex-col justify-between items-center w-fit relative">
          <p className="font-bold text-lg text-left w-80">ТОО "ВенПром"</p>
          <p className="text-sm text-left font-semibold w-80">
            Поставляем по оптовым ценам:
          </p>
          <ul className="text-sm text-left w-80">
            <li> Кабели большого сечения</li>
            <li> Крупногабаритные подшипники</li>
          </ul>
          <p className="text-sm text-left font-semibold w-80">
            Оказываем услуги:
          </p>
          <ul className="text-sm text-left w-80">
            <li> По комплексному оснащению предприятий</li>
          </ul>
        </div>
        <div className="py-4 px-4 text-neutral-200 flex flex-col gap-y-1 bg-blue-700 relative">
          <p className="text-xs">Связаться с нами:</p>
          <p className="text-xs">//(831)228-05-60//</p>
          <p className="text-xs">//(831)228-05-61// </p>
          <p className="text-xs">//(831)279-98-35//</p>
        </div>
        <div className="py-4 px-4 text-neutral-200 flex flex-col gap-y-1 bg-slate-800 relative">
          <p className="text-xs">Адрес:</p>
          <p className="text-xs">Lorem lorem</p>
          <p className="text-xs">Lorem Ipsum Lorem </p>
          <Link href="#" className="text-xs underline underline-offset-2">
            info@stpi.ru
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LayoutHeader;
