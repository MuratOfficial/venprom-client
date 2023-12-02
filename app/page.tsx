import ClientHeader from "@/components/client/client-header";
import PhotoCollage from "@/components/client/photo-collage";
import PopularCategory from "@/components/client/popular-category";
import ProcessChain from "@/components/client/process-chain";
import ProductLinks from "@/components/client/product-links";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-4">
      <ClientHeader />
      <PopularCategory />
      <ProductLinks />
      {/**Animated Blocks */}
      <ProcessChain />
    </div>
  );
}

export default HomePage;
