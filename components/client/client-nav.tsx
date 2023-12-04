import Link from "next/link";
import React from "react";

function ClientNav() {
  const nav = [
    { label: "Главная", href: "/" },
    { label: "Продукция", href: "/products" },
    { label: "О компании", href: "/about" },
    { label: "Контакты", href: "/contacts" },
  ];
  return (
    <div className="  flex px-48 flex-col w-full justify-center bg-blue-800 bg-opacity-80">
      <ul className="flex flex-row justify-between py-8 items-center">
        {nav.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-lg py-2 px-12 text-neutral-200 hover:text-blue-700 rounded-lg hover:bg-neutral-200 transition duration-500 delay-150"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#"
          className="py-2 px-12 text-lg rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-neutral-200 hover:text-blue-600"
        >
          Заказать
        </Link>
      </ul>
    </div>
  );
}

export default ClientNav;
