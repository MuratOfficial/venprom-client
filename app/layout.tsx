import ClientFooter from "@/components/client/client-footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Венпром - Промышленные товары оптом и в розницу",
  description:
    "Венпром - Промышленные товары оптом и в розницу по всему Казахстану, звоните по номерам. Большие кабели и Крупногабаритные подшипники",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <ClientFooter />
      </body>
    </html>
  );
}
