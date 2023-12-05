import ClientHeader from "@/components/client/client-header";
import LayoutHeader from "@/components/client/layout-header";
import PopularCategory from "@/components/client/popular-category";
import ProcessChain from "@/components/client/process-chain";
import ProductLinks from "@/components/client/product-links";
import Script from "next/script";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <Script src="//code.jivo.ru/widget/HI9geWNiQL" async></Script>
      <LayoutHeader />
      <ClientHeader />
      <PopularCategory />
      <ProductLinks />
      <ProcessChain />

      {/**Animated Blocks */}
    </div>
  );
}

export default HomePage;
