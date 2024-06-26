import getProducts from "@/services/get-products";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const cabelsUrl = "https://www.venprom.kz/api/66140b237b2794a77f1604d7";

  const podUrl = "https://www.venprom.kz/api/661409697b2794a77f1604d6";

  const cabelsProducts = await getProducts(`${cabelsUrl}/products`);
  const podProducts = await getProducts(`${podUrl}/products`);

  const product =
    cabelsProducts.find((el) => el.id === params.productId) ||
    podProducts.find((el) => el.id === params.productId);

  const imgUrl = product?.images[0] || {};

  return {
    title: product?.name,
    description: product?.category?.description1,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
