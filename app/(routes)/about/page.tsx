"use client";
import ClientForm from "@/components/client/client-form";
import ClientNav from "@/components/client/client-nav";
import ProductLinks from "@/components/client/product-links";
import WhatsAppWidget from "@/components/whatsapp-widget";
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <ClientNav />
      <div className="flex flex-col xs:gap-y-4 lg:gap-y-8 xs:px-4 lg:px-48 py-8">
        <p className="uppercase xs:text-xl lg:text-3xl text-center font-bold text-blue-900">
          О компании
        </p>
        <p className="text-sm text-blue-900 py-4">
          ТОО «Венпром» специализируется на оптовых поставках крупногабаритных
          подшипников и силовых кабелей большого сечения, а также на комплексном
          оснащении (снабжении) промышленных , производственных, и добывающих
          предприятий. Заказчики нас ценят за быструю обработку заявок, низкие
          цены, и оперативную доставку, мы их за доверие! На сайте представлены
          категории товаров, доступных к поставке. Прямые договорённости с
          заводами производителями из Европы, России, Белоруссии и Китая, а
          также с их дистрибьюторами и крупными оптовиками, дают нам возможность
          поставлять продукцию по очень низким ценам. Мы гарантируем, что в
          нашем лице Вы получите добросовестного, ответственного и пунктуального
          поставщика!
        </p>
      </div>
      <ProductLinks />
      <ClientForm />
      <WhatsAppWidget />
    </div>
  );
}

export default AboutPage;
