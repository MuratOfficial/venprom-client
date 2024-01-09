import getProducts from "@/services/get-products";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const cabelsUrl =
    "https://www.venprom.kz/api/ebd3c431-589b-4cda-88f4-5f85eb183ff0";

  const podUrl =
    "https://www.venprom.kz/api/21e60451-fde6-4952-a435-489117888b84";

  const cabelsProducts = await getProducts(`${cabelsUrl}/products`);
  const podProducts = await getProducts(`${podUrl}/products`);

  const product =
    cabelsProducts.find((el) => el.id === params.productId) ||
    podProducts.find((el) => el.id === params.productId);

  const imgUrl = product?.images[0] || {};

  return {
    title: product?.name,
    description: product?.category.description1,
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
