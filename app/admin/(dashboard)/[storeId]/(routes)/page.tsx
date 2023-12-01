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

  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;
