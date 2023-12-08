import type { Metadata } from "next";
import LayoutHeader from "@/components/client/layout-header";

export const metadata: Metadata = {
  title: "ВенПром - Промышленные товары оптом и в розницу",
  description:
    "ВенПром - Промышленные товары оптом и в розницу по всему Казахстану, звоните по номерам. Большие кабели и Крупногабаритные подшипники",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
}
