import ClientHeader from "@/components/client/client-header";
import PhotoCollage from "@/components/client/photo-collage";
import PopularCategory from "@/components/client/popular-category";
import ProcessChain from "@/components/client/process-chain";
import ProductLinks from "@/components/client/product-links";
import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-8">
      <ClientHeader />
      <div className=" flex flex-col items-center gap-y-8 px-48 w-full before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-white inline-block relative">
        <PopularCategory />
        <ProductLinks />
        <ProcessChain />
      </div>

      {/**Animated Blocks */}
    </div>
  );
}

export default HomePage;
