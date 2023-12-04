import ClientNav from "@/components/client/client-nav";
import React from "react";
import ProductsList from "./components/products-list";
import ProductItems from "./components/product-item";

function ProductsPage() {
  return (
    <div className="h-full w-full flex flex-col h-min-screen">
      <div className="absolute w-full bg-blue-800  h-40 top-16 -z-10" />
      <ClientNav />
      <div className="flex flex-row justify-between px-16 py-4 gap-x-4">
        <ProductsList />
        <ProductItems />
      </div>
    </div>
  );
}

export default ProductsPage;
