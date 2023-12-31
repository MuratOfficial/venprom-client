import {
  ArrowBigRight,
  CheckSquare,
  Cog,
  FileCheck,
  PenSquare,
  RefreshCcwDot,
  Truck,
} from "lucide-react";
import React from "react";
import { FadeInBlocks } from "../animations/basic-animations";

function ProcessChain() {
  return (
    <div className="flex flex-col xxs:px-2 xs:px-4 lg:px-48 items-center gap-y-8 w-full py-8 before:block before:absolute before:-inset-1 before:bg-gradient-to-b  before:from-[#271fc6] before:to-sky-700 inline-block relative">
      <div className="w-full flex flex-row justify-center">
        <FadeInBlocks>
          <p className="uppercase flex flex-row gap-x-4  text-3xl py-6 text-center w-fit font-semibold text-[#bbb157] ">
            Схема работы{" "}
            <RefreshCcwDot
              size={35}
              className="lg:visible xs:collapse xxs:collapse"
            />
          </p>
        </FadeInBlocks>
      </div>

      <div className="flex gap-y-2 text-[#bbb157] flex-col items-center rounded-lg justify-between relative w-full p-8">
        <div className="flex flex-row xs:justify-between  xxs:justify-between lg:justify-evenly items-center w-full">
          <p className="xs:text-base xxs:text-sm lg:text-2xl xxs:w-24 xs:w-32 lg:w-fit font-semibold uppercase ">
            1. Прием заявки
          </p>
          <div
            className="lg:w-60 xs:w-24 xxs:w-24 xs:h-24 xxs:h-24 lg:h-60 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url("/process/apply.svg")` }}
          />
        </div>
        <div className="flex flex-row xs:justify-between xxs:justify-between lg:justify-evenly items-center w-full">
          <div
            className="lg:w-60 xs:w-24 xxs:w-24 xs:h-24 xxs:h-24 lg:h-60 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url("/process/process.svg")` }}
          />
          <p className="xs:text-base xxs:text-sm lg:text-2xl xxs:w-24 xs:w-32 lg:w-fit font-semibold uppercase ">
            2. Обработка заявки
          </p>
        </div>
        <div className="flex flex-row xs:justify-between xxs:justify-between lg:justify-evenly items-center w-full">
          <p className="xs:text-base xxs:text-sm lg:text-2xl xxs:w-24 xs:w-32 lg:w-fit font-semibold uppercase ">
            3. Отправка коммерческого <br /> предложения
          </p>
          <div
            className="lg:w-60 xs:w-24 xxs:w-24 xs:h-24 xxs:h-24 lg:h-60 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url("/process/sending.svg")` }}
          />
        </div>
        <div className="flex flex-row xs:justify-between xxs:justify-between lg:justify-evenly items-center w-full">
          <div
            className="lg:w-60 xs:w-24 xxs:w-24 xs:h-24 xxs:h-24 lg:h-60 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url("/process/deal.svg")` }}
          />
          <p className="xs:text-base xxs:text-sm lg:text-2xl xxs:w-24 xs:w-32 lg:w-fit font-semibold uppercase ">
            4. Заключение договора
          </p>
        </div>
        <div className="flex flex-row xs:justify-between xxs:justify-between lg:justify-evenly items-center w-full">
          <p className="xs:text-base xxs:text-sm lg:text-2xl xxs:w-24 xs:w-32 lg:w-fit font-semibold uppercase ">
            5. Предоставление счёта <br /> на оплату
          </p>
          <div
            className="lg:w-60 xs:w-24 xxs:w-24 xs:h-24 xxs:h-24 lg:h-60 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url("/process/bank.svg")` }}
          />
        </div>
        <div className="flex flex-row xs:justify-between xxs:justify-between lg:justify-evenly items-center w-full">
          <div
            className="lg:w-60 xs:w-24 xxs:w-24 xs:h-24 xxs:h-24 lg:h-60 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url("/process/deliver.svg")` }}
          />
          <p className="xs:text-base xxs:text-sm lg:text-2xl xxs:w-24 xs:w-32 lg:w-fit font-semibold uppercase ">
            6. Поставка товаров
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProcessChain;
