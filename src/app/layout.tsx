import { Providers } from '@/app/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Aziz Prasetyo',
  description:
    'A Computer Science undergraduate student at the Universitas Pembangunan Nasional Veteran Jakarta and a passionate Software Engineer from Jakarta, Indonesia with a solid foundation built over two years of hands-on coding.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
