import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import Navbar from 'app/_components/navbar/Navbar';
import Providers from 'app/_utils/Providers';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './globals.css';

const inter = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samples Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Providers>
        <body className={`${inter.className}`}>
          <ReactQueryDevtools />
          <h1 className='p-8 text-center text-2xl'>Samples Management</h1>
          <Navbar />
          <div className='justify-center p-10'>{children}</div>
        </body>
      </Providers>
    </html>
  );
}
