import ClientHeader from "@/components/client/client-header";
import LayoutHeader from "@/components/client/layout-header";
import PopularCategory from "@/components/client/popular-category";
import ProcessChain from "@/components/client/process-chain";
import ProductLinks from "@/components/client/product-links";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
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
