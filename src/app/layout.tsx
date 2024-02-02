import type { Metadata } from "next";
import { Roboto_Flex} from "next/font/google";
import Navbar from "./_components/navbar/Navbar";
import "./globals.css";

const inter = Roboto_Flex({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <h1 className="text-2xl p-8 text-center">Samples Management</h1>
        <Navbar />
        <div className="p-10 flex justify-center">{children}</div>
      </body>
    </html>
  );
}
