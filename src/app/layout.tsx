import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="min-h-full bg-gradient-to-t from-blue-100  to-gray-200 text-slate-900  "
    >
      <body className={`${inter.className} `}>
        <Providers>
          <div className="m-auto w-full h-fit">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
