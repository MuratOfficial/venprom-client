"use client";
import ClientForm from "@/components/client/client-form";
import ClientHeader from "@/components/client/client-header";
import LayoutHeader from "@/components/client/layout-header";
import PopularCategory from "@/components/client/popular-category";
import ProcessChain from "@/components/client/process-chain";
import ProductLinks from "@/components/client/product-links";
import WhatsAppWidget from "@/components/whatsapp-widget";
import Script from "next/script";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <Script src="//code.jivo.ru/widget/HI9geWNiQL" async></Script>
      <LayoutHeader />
      <div className=" w-full py-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 inline-block relative"></div>

      <ClientHeader />
      <PopularCategory />
      <ProductLinks />
      <ProcessChain />
      <div className="pt-20 w-full px-48">
        <ClientForm />
      </div>

      <WhatsAppWidget />
      {/**Animated Blocks */}
    </div>
  );
}

export default HomePage;
