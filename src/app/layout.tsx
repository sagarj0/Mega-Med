import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mega Med App',
  description:
    'Mega Med App is a edcuational platform for medical students to learn and practice for their medical exams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full  primary ">
      <body
        className={`${inter.className} min-h-full h-fit bg-gradient-to-t from-sky-50  to-gray-200 text-slate-900 `}
      >
        <Providers>
          <div className=" w-full h-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
