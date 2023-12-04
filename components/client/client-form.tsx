"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1),
  contact: z.string().min(1),
  textArea: z.string().min(1),
});

type FormData = z.infer<typeof contactFormSchema>;

function ClientForm() {
  const links = [
    { name: "Ln", href: "https://www.linkedin.com/in/toimetm/" },
    {
      name: "Ins",
      href: "https://www.instagram.com/official_murattoimet/",
    },
    { name: "Wha", href: "https://wa.me/77472156675" },
  ];
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: FormData) {
    console.log(isSubmitting);
    console.log(data);
  }

  return (
    <div className="w-full xs:h-full lg:h-full rounded-[36px] border-8 bg-slate-50 lg:px-16 xs:px-6 sm:px-6 py-10 border-slate-700 grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2">
      <div className="flex flex-col col-span-1 gap-y-8">
        <p className="text-lg text-center">
          Остались вопросы? Оставьте нам сообщение, либо свяжитесь с нами по
          ниже приведенным контактам
        </p>
        <div className=" w-full font-semibold text-slate-700  justify-center text-base">
          <span className="flex flex-row gap-x-4">
            <PhoneCall /> +77472156675{" "}
          </span>
          <Link
            href="mailto:toimetm@gmail.com"
            className="flex flex-row gap-x-4"
          >
            <Mail size={25} /> toimetm@gmail.com
          </Link>
        </div>

        <div className="text-slate-800 flex lg:flex-row xs:flex-col sm:flex-col gap-y-2 gap-x-8 text-base ">
          {links.map((item, index) => (
            <Link key={index} href={item.href} className="w-fit">
              <p className="hover:text-blue-700 hover:border-blue-700 px-3 py-1 rounded-lg border-2 border-slate-800 transition-colors font-semibold duration-500 delay-150 w-fit">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col col-span-3 lg:px-16 xs:px-0 sm:px-0">
        {/* Form Body */}

        <form
          className="flex flex-col gap-y-12 "
          action=""
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name Input */}
          <div className="relative">
            <input
              {...register("name", { required: true })}
              id="name"
              name="name"
              type="text"
              className="peer h-10 w-full bg-slate-50 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-slate-600 focus:outline-none"
              placeholder="john@doe.com"
              autoComplete="off"
            />
            {errors?.name && (
              <p className="text-red-600 text-sm">{errors?.name?.message}</p>
            )}
            <label
              htmlFor="name"
              className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Ваше имя
            </label>
          </div>

          <div className="relative">
            <input
              {...register("contact", { required: true })}
              id="contact"
              name="contact"
              type="text"
              className="peer h-10 w-full border-b-2 bg-slate-50 border-gray-300 text-gray-900 placeholder-transparent focus:border-slate-600 focus:outline-none"
              placeholder="john@doe.com"
              autoComplete="off"
            />
            {errors?.contact && (
              <p className="text-red-600 text-sm">{errors?.contact?.message}</p>
            )}
            <label
              htmlFor="contact"
              className="absolute -top-3.5 left-0 text-sm  text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Телефон
            </label>
          </div>

          <div className="relative">
            <input
              {...register("textArea", { required: false })}
              id="textArea"
              name="textArea"
              type="text"
              className="peer h-10 w-full border-b-2 border-gray-300 bg-slate-50 text-gray-900 placeholder-transparent focus:border-slate-600 focus:outline-none"
              placeholder="john@doe.com"
              autoComplete="off"
            />
            {errors?.textArea && (
              <p className="text-red-600 text-sm">
                {errors?.textArea?.message}
              </p>
            )}
            <label
              htmlFor="textArea"
              className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Сообщение
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isDirty || !isValid || isSubmitting}
            className=" block w-full cursor-pointer rounded bg-slate-900 px-4 py-2 text-center font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
          >
            {isSubmitting ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 mr-2 text-white animate-spin fill-slate-600 opacity-100"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG for Spinner Animation */}
                </svg>
              </div>
            ) : (
              <p>Отправить</p>
            )}
          </button>
        </form>

        <a
          href="https://www.freeprivacypolicy.com/live/f8a33699-3c7d-4d06-954f-ded481021df4"
          className="mt-4 block text-center text-sm font-medium text-slate-600 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          Нажимая на кнопку "Отправить", вы соглашаетесь с политикой
          конфиденциальности
        </a>
      </div>
    </div>
  );
}

export default ClientForm;
