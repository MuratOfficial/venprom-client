import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Admin Dashboard",
//   description: "Admin Dashboard Panel for managing entities of Store",
// };

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/admin/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(`/admin/${store.id}`);
  }

  return <>{children}</>;
}
