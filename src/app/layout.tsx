import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samples Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-10`}>
        <h1 className="text-2xl p-10">Samples Management</h1>
        <Navbar />
        <div className="p-10">{children}</div>
      </body>
    </html>
  );
}
