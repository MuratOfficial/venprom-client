import ClientFooter from "@/components/client/client-footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

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
      <ClerkProvider>
        <body className={`${inter.className}`}>
          {children}
          <ClientFooter />
        </body>
      </ClerkProvider>
    </html>
  );
}
