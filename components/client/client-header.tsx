import Link from "next/link";
import React from "react";
import PhotoCollage from "./photo-collage";

function ClientHeader() {
  const nav = [
    { label: "Главная", href: "/" },
    { label: "Продукция", href: "/" },
    { label: "О компании", href: "/" },
    { label: "Контакты", href: "/" },
  ];
  return (
    <div className="  flex flex flex-col w-full">
      <PhotoCollage />
      <div className="px-48 flex flex-row h-24 w-full justify-between items-center">
        <div className="text-4xl uppercase">Logo</div>
        <div className="flex flex-col justify-between items-center w-fit">
          <p className="font-bold text-lg text-center">ТОО "ВенПром"</p>
          <p className="text-sm text-center w-72">
            Комплексное снабжение промышленных и строительных организаций
            импортным оборудованием и комплектующими
          </p>
        </div>
        <div className="py-4 px-4 text-neutral-200 flex flex-col gap-y-1 bg-blue-700">
          <p className="text-xs">Связаться с нами:</p>
          <p className="text-xs">//(831)228-05-60//</p>
          <p className="text-xs">//(831)228-05-61// </p>
          <p className="text-xs">//(831)279-98-35//</p>
        </div>
        <div className="py-4 px-4 text-neutral-200 flex flex-col gap-y-1 bg-slate-800">
          <p className="text-xs">Адрес:</p>
          <p className="text-xs">Lorem lorem</p>
          <p className="text-xs">Lorem Ipsum Lorem </p>
          <Link href="#" className="text-xs underline underline-offset-2">
            info@stpi.ru
          </Link>
        </div>
      </div>

      <div className="flex px-48 flex-row w-full h-[320px] justify-end items-center relative">
        <div className="p-6 bg-slate-800 bg-opacity-80 backdrop-blur-sm rounded-lg">
          <ul className="flex flex-col gap-y-4">
            {nav.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-sm text-neutral-200 hover:text-blue-600 transition duration-500 delay-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#"
              className="py-2 px-12 text-sm rounded-lg text-center bg-slate-700 text-neutral-200 hover:bg-neutral-200 hover:text-blue-600"
            >
              Заказать
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClientHeader;
