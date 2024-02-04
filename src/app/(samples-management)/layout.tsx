import type { Metadata } from "next";
import { Roboto_Flex} from "next/font/google";
import Navbar from "app/_components/navbar/Navbar";
import Providers from "app/_utils/Providers";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import "./globals.css";

// todo make import paths with aliases
// todo make file name consistent (upper case, dashes end so on) - daj z małych liter i zamiast camelCase daj myślnik

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
      <Providers>
        <body className={`${inter.className}`}>
        <ReactQueryDevtools />
          <h1 className="text-2xl p-8 text-center">Samples Management</h1>
          <Navbar />
          <div className="p-10 justify-center">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
