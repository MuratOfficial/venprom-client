"use client";
import ClientForm from "@/components/client/client-form";
import ClientNav from "@/components/client/client-nav";
import ProductLinks from "@/components/client/product-links";
import WhatsAppWidget from "@/components/whatsapp-widget";
import React from "react";

function ContactsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-8">
      <ClientNav />
      <div className="flex flex-col xs:gap-y-4 xxs:gap-y-4 lg:gap-y-8 xs:px-4 lg:px-48 w-full">
        <p className="uppercase xs:text-xl xxs:text-xl lg:text-4xl text-center font-bold text-blue-900">
          Контакты
        </p>
        <div className="py-4 px-6 bg-sky-100 bg-opacity-80 rounded-lg text-blue-900 w-full">
          <p className="text-xl text-center font-semibold">
            ТОО &ldquo;ВенПром&rdquo;
          </p>

          <p className="text-lg text-center">
            Юр. адрес: Казахстан, город Алматы, Ауэзовский район, Микрорайон 9,
            <br></br>
            дом 27, кв. 2, почтовый индекс A10A8E0
          </p>
          <p className="text-lg text-center">
            Директор Утегенова Татьяна Борисовна
          </p>
          <p className="text-lg text-center">
            Филиал АО &ldquo;ForteBank&rdquo; в г. Алматы БИК IRTYKZKA
          </p>
          <p className="text-lg text-center">
            БИН: 230940038234 Расчетный счет-ИИК KZ7596502F0016889107
          </p>
        </div>
      </div>
      <ClientForm />
      <WhatsAppWidget />
    </div>
  );
}

export default ContactsPage;
