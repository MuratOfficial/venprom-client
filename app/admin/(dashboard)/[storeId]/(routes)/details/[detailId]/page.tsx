import prismadb from "@/lib/prismadb";
import { DetailForm } from "./components/color-form";

const SizePage = async ({
  params,
}: {
  params: {
    detailId: string;
  };
}) => {
  let detail;

  if (params.detailId === "new") {
    detail = null;
  } else {
    detail = await prismadb.detail.findUnique({
      where: {
        id: params.detailId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DetailForm initialData={detail} />
      </div>
    </div>
  );
};

export default SizePage;
