import { MetadataRoute } from "next";
import getProducts from "@/services/get-products";

type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = "https://www.venprom.kz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap: Route[] = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date().toISOString(),
    },
  ];

  const cabelsUrl = `${baseUrl}/api/66140b237b2794a77f1604d7`;

  const podUrl = `${baseUrl}/api/661409697b2794a77f1604d6`;

  const productsCabelPromise = await getProducts(`${cabelsUrl}/products`).then(
    (products) =>
      products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date().toISOString(),
      }))
  );

  const productsPodPromise = await getProducts(`${podUrl}/products`).then(
    (products) =>
      products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date().toISOString(),
      }))
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([productsPodPromise, productsCabelPromise])
    ).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
