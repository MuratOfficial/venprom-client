import ClientNav from "@/components/client/client-nav";
import ProductLinks from "@/components/client/product-links";
import React from "react";

function ContactsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-8">
      <ClientNav />
      <div className="flex flex-col gap-y-8 px-48 w-full">
        <p className="uppercase text-2xl text-center font-semibold text-blue-600">
          Контакты
        </p>
        <div className="py-4 px-6 bg-slate-300 bg-opacity-80 rounded-lg  w-full">
          <p className="text-xl text-center font-semibold">ТОО "ВенПром"</p>

          <p className="text-lg text-center">
            Юр. адрес: Казахстан, город Алматы, Ауэзовский район, Микрорайон 9,
            <br></br>
            дом 27, кв. 2, почтовый индекс A10A8E0
          </p>
          <p className="text-lg text-center">
            Директор Утегенова Татьяна Борисовна
          </p>
          <p className="text-lg text-center">
            Филиал АО "ForteBank" в г. Алматы БИК IRTYKZKA
          </p>
          <p className="text-lg text-center">
            БИН: 230940038234 Расчетный счет-ИИК KZ7596502F0016889107
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
