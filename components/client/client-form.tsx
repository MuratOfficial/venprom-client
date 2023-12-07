"use client";

import { Mail, PhoneCall } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

import React from "react";

function ClientForm() {
  const links = [
    {
      name: <IoLogoWhatsapp size={30} />,
      href: "",
    },
    {
      name: <RiInstagramFill size={30} />,
      href: "",
    },
    { name: <FaTelegram size={30} />, href: "https://wa.me/77472156675" },
  ];

  return (
    <div
      className="w-full xs:h-full lg:h-full rounded-[36px]  bg-cover bg-no-repeat bg-right-top  lg:px-16 xs:px-6 sm:px-6 py-10  grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2"
      style={{ backgroundImage: `url("/indImg/portret3.jpg")` }}
    >
      <div className="flex flex-col col-span-1 lg:px-16 xs:px-0 sm:px-0">
        {/* Form Body */}
      </div>
      <div className="flex flex-col col-span-3 gap-y-8 text-neutral-100 items-center">
        <p className="text-lg text-center">
          Остались вопросы? <br /> Свяжитесь с нами по ниже приведенным
          контактам
        </p>
        <div className=" w-fit font-semibold  flex flex-col gap-y-2  justify-center text-base">
          <span className="flex flex-row gap-x-4">
            <PhoneCall /> +7 705 752 71 51{" "}
          </span>
          <span className="flex flex-row gap-x-4">
            <PhoneCall /> +7 701 999 68 67{" "}
          </span>
          <Link
            href="mailto:toimetm@gmail.com"
            className="flex flex-row gap-x-4"
          >
            <Mail size={25} /> venprom@inbox.ru
          </Link>
        </div>

        <div className=" flex lg:flex-row xs:flex-col sm:flex-col gap-y-2 gap-x-6 text-base ">
          {links.map((item, index) => (
            <Link key={index} href={item.href} className="w-fit">
              <p className="hover:text-slate-700 transition-colors font-semibold duration-500 delay-150 w-fit">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
