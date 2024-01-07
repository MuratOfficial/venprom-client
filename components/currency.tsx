import useCurrency from "@/hooks/use-currency";
import React from "react";

const ExchangeRatesComponent: React.FC = () => {
  const otherCurr = useCurrency()?.other;
  const curr = useCurrency()?.curr;
  const currList = [
    {
      name: "RUB",
      curr: curr,
    },
    {
      name: "EUR",
      curr: otherCurr?.KZT || 480.2,
    },
  ];

  return (
    <div className="w-full xs:h-full xxs:h-full text-neutral-50 gap-x-4 lg:h-fit gap-y-2 py-2 flex xs:flex-col xxs:flex-col lg:flex-row justify-center px-2 xs:rounded-md xxs:rounded-md lg:rounded-xl bg-opacity-80 items-center bg-gradient-to-r from-blue-500 to-blue-600 relative ">
      <ul className="flex flex-row justify-between gap-x-4">
        {currList.map((item, key) => (
          <li key={key} className="">
            <span className="font-semibold">{item.name}:</span>{" "}
            {item.curr?.toFixed(3)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRatesComponent;
