import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { ProductClient } from "./components/client";
import { ProductColumn } from "./components/columns";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    isArchived: item.isArchived,
    category: item.category.name,
    detailId: item.detailId,
    picture1Url: item?.images[0].url,
    picture2Url: item?.images[0].url,
    categoryId: item.categoryId,
    characteristics1: item?.characteristics1,
    characteristics2: item?.characteristics2,
    characteristics3: item?.characteristics3,
    characteristics4: item?.characteristics4,
    characteristics5: item?.characteristics5,
    characteristics6: item?.characteristics6,
    characteristics7: item?.characteristics7,
    characteristics8: item?.characteristics8,
    characteristics9: item?.characteristics9,
    characteristics10: item?.characteristics10,
    characteristics11: item?.characteristics11,
    characteristics12: item?.characteristics12,
    characteristics13: item?.characteristics13,

    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
