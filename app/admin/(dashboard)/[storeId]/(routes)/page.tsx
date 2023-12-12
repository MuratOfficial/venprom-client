import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div
      className="px-16 py-8 flex flex-col justify-evenly bg-contain bg-no-repeat items-center min-h-screen"
      style={{ backgroundImage: `url("/adminImg/welcome.svg")` }}
    >
      <p className="uppercase text-3xl font-semibold bg-[#6C63FF] rounded-xl p-4 text-slate-700">
        Категория: {store?.name}
      </p>
    </div>
  );
};

export default DashboardPage;
