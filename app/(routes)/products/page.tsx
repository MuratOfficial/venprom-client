"use client";
import ClientNav from "@/components/client/client-nav";
import React, { useEffect, useState } from "react";
import ProductsList from "./components/products-list";
import ProductItems from "./components/product-item";
import WhatsAppWidget from "@/components/whatsapp-widget";

function ProductsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="h-full w-full flex flex-col h-min-screen bg-slate-50">
      <ClientNav />
      <div className="flex lg:flex-row xxs:flex-col xs:flex-col gap-y-4 justify-between xxs:px-2 xs:px-4 lg:px-16 py-4 gap-x-4">
        <ProductsList />
        <ProductItems />
      </div>
      <WhatsAppWidget />
    </div>
  );
}

export default ProductsPage;
