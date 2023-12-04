import { useRouter } from "next/navigation";
import React from "react";

type FormData = z.infer<typeof contactFormSchema>;

function ClientForm() {
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
    <div className="w-full px-8 relative">
      <p className="text-left uppercase text-neutral-800 lg:text-7xl xs:text-5xl py-8 font-semibold mx-16">
        Header
      </p>

      <div className="w-full xs:h-full lg:h-screen rounded-[36px] border-8 bg-neutral-100 lg:px-16 xs:px-6 sm:px-6 py-10 border-violet-700 grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2">
        <div className="flex flex-col col-span-2">Contacts</div>
        <div className="flex flex-col col-span-2 lg:px-16 xs:px-0 sm:px-0">
          {/* Form Body */}

          <h1 className="text-md font-normal text-violet-800 pb-8 mt-4 drop-shadow-xl">
            HeadText
          </h1>
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
                className="peer h-10 w-full bg-neutral-100 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-violet-600 focus:outline-none"
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
                {t("name")}
              </label>
            </div>

            <div className="relative">
              <input
                {...register("contact", { required: true })}
                id="contact"
                name="contact"
                type="text"
                className="peer h-10 w-full border-b-2 bg-neutral-100 border-gray-300 text-gray-900 placeholder-transparent focus:border-violet-600 focus:outline-none"
                placeholder="john@doe.com"
                autoComplete="off"
              />
              {errors?.contact && (
                <p className="text-red-600 text-sm">
                  {errors?.contact?.message}
                </p>
              )}
              <label
                htmlFor="contact"
                className="absolute -top-3.5 left-0 text-sm  text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
              >
                {t("contact")}
              </label>
            </div>

            <div className="relative">
              <input
                {...register("textArea", { required: false })}
                id="textArea"
                name="textArea"
                type="text"
                className="peer h-10 w-full border-b-2 border-gray-300 bg-neutral-100 text-gray-900 placeholder-transparent focus:border-violet-600 focus:outline-none"
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
                {t("textArea")}
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              className=" block w-full cursor-pointer rounded bg-violet-900 px-4 py-2 text-center font-semibold text-white hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 mr-2 text-white animate-spin fill-violet-600 opacity-100"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG for Spinner Animation */}
                  </svg>
                </div>
              ) : (
                <p>{t("buttonName")}</p>
              )}
            </button>
          </form>

          <a
            href="https://www.freeprivacypolicy.com/live/f8a33699-3c7d-4d06-954f-ded481021df4"
            className="mt-4 block text-center text-sm font-medium text-violet-600 hover:underline focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            {t("policy")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
