import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { store: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.store,
    },
  });

  return (
    <div className="px-16 py-8 flex flex-col justify-evenly items-center min-h-screen">
      <p>Категория: {store?.name}</p>
    </div>
  );
};

export default DashboardPage;
