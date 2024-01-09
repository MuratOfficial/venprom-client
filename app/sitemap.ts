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

  const cabelsUrl = `${baseUrl}/api/ebd3c431-589b-4cda-88f4-5f85eb183ff0`;

  const podUrl = `${baseUrl}/api/21e60451-fde6-4952-a435-489117888b84`;

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
