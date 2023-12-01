import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { UserClient } from "./components/client";
import { UserColumn } from "./components/columns";

const UsersPage = async ({ params }: { params: { storeId: string } }) => {
  const users = await prismadb.user.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedUsers: UserColumn[] = users.map((item) => ({
    id: item.id,
    email: item.email,
    surname: item.surname,
    name: item.name,
    birthday: format(item.birthday, "MMMM do, yyyy"),
    sex: item.sex,
    phone: item.phone,
    password: item.password,
    isActive: item.isActive,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <UserClient data={formattedUsers} />
      </div>
    </div>
  );
};

export default UsersPage;
