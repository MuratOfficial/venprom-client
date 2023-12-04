import ClientNav from "@/components/client/client-nav";
import ProductLinks from "@/components/client/product-links";
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-y-8">
      <ClientNav />
      <div className="flex flex-col gap-y-8 px-48">
        <p className="uppercase text-2xl text-center font-semibold text-blue-600">
          О компании
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          similique libero a, amet quaerat voluptate officiis, mollitia
          consequatur eligendi alias ab repellendus dicta sequi? Expedita
          excepturi nostrum tenetur unde vel. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Distinctio molestiae quaerat non vero
          fugit possimus deleniti voluptates! Quam, beatae nihil necessitatibus
          laboriosam voluptate odio minus non earum quo blanditiis mollitia.
        </p>
        <ProductLinks />
      </div>
    </div>
  );
}

export default AboutPage;
