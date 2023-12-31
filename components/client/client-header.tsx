import Link from "next/link";
import React from "react";
import PhotoCollage from "./photo-collage";

function ClientHeader() {
  const nav = [
    { label: "Главная", href: "/" },
    { label: "Продукция", href: "/products" },
    { label: "О компании", href: "/about" },
    { label: "Контакты", href: "/contacts" },
  ];
  return (
    <div className="  flex flex flex-col w-full">
      <PhotoCollage />

      <div className="flex xs:px-4 xxs:px-2 lg:px-48 flex-row w-full h-[320px] justify-end items-center relative">
        <div className="p-6 bg-[#bbb157] bg-opacity-80 backdrop-blur-sm rounded-lg">
          <ul className="flex flex-col gap-y-4">
            {nav.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-base font-medium text-neutral-200 hover:text-[#271fc6] transition duration-500 delay-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="mailto:venprom@inbox.ru"
              className="py-2 px-12 font-semibold text-base rounded-lg text-center bg-[#686230] text-neutral-200 hover:bg-neutral-200 hover:text-[#271fc6]"
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
