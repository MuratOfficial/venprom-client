"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

function ClientNav() {
  const pathname = usePathname();
  const nav = [
    { label: "Главная", href: "/" },
    {
      label: "Продукция",
      href: "/products",
      active: pathname.includes("products"),
    },
    {
      label: "О компании",
      href: "/about",
      active: pathname.includes("about"),
    },
    {
      label: "Контакты",
      href: "/contacts",
      active: pathname.includes("contacts"),
    },
  ];
  return (
    <div className="  flex xs:px-4 lg:px-48 flex-col w-full justify-center bg-gradient-to-r from-blue-800 to-sky-800 relative">
      <ul className="flex xs:flex-col lg:flex-row justify-between xs:py-1 lg:py-4 items-center relative">
        {nav.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "lg:text-base xs:text-sm font-medium py-2 px-10 text-slate-50 hover:text-blue-700 rounded-lg hover:bg-slate-50 transition duration-500 delay-150",
              item.active && "bg-slate-50 text-blue-700"
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="mailto:venprom@inbox.ru"
          className="py-2 px-12 xs:text-sm lg:text-base font-medium rounded-lg text-center bg-blue-700 text-neutral-200 hover:bg-neutral-200 hover:text-blue-600"
        >
          Заказать
        </Link>
      </ul>
    </div>
  );
}

export default ClientNav;
