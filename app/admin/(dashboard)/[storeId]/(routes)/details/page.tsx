import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { DetailClient } from "./components/client";
import { DetailColumn } from "./components/columns";

const DetailsPage = async ({ params }: { params: { storeId: string } }) => {
  const details = await prismadb.detail.findMany({
    where: {
      storeId: params.storeId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedDetails: DetailColumn[] = details.map((item) => ({
    id: item.id,
    name: item.name,
    detailId: item.detailId,
    price: item.price,
    price1: item.price1,
    value1: item.value1,
    value2: item.value2,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DetailClient data={formattedDetails} />
      </div>
    </div>
  );
};

export default DetailsPage;
