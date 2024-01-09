import type { Metadata } from "next";
import LayoutHeader from "@/components/client/layout-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.venprom.kz"),
  robots: {
    follow: true,
    index: true,
  },
  title: {
    default: "Венпром - Промышленные товары оптом и в розницу | venprom.kz",
    template: `%s | Венпром`,
  },
  description:
    "Венпром - Промышленные товары оптом и в розницу по всему Казахстану, звоните по номерам. Большие кабели и Крупногабаритные подшипники | venprom.kz",
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
