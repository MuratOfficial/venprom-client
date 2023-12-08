import ClientForm from "@/components/client/client-form";
import ClientNav from "@/components/client/client-nav";
import ProductLinks from "@/components/client/product-links";
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center min-h-screen ">
      <ClientNav />
      <div className="flex flex-col gap-y-8 px-48 py-8">
        <p className="uppercase text-4xl text-center font-bold text-blue-900">
          О компании
        </p>
        <p>
          Здесь будет отображаться текст о компании
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          praesentium sapiente, delectus mollitia exercitationem voluptates a
          doloribus modi molestiae quis temporibus molestias. Tenetur fugiat rem
          a quasi autem voluptas optio.
        </p>
      </div>
      <ProductLinks />
      <ClientForm />
    </div>
  );
}

export default AboutPage;
