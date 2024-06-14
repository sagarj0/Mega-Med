import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mega Med App',
  description:
    'Mega Med App is a edcuational platform for medical students to learn and practice for their medical exams.',
  keywords: [
    'Mega Med App',
    'Mentorship',
    'Medical Mentorship',
    'Medical Practice',
    'Medical',
    'Education',
    'Platform',
    'Medical Students',
    'Practice',
    'Exams',
    'Medical Exams',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="primary  h-full ">
      <body className={`${inter.className} h-fit min-h-full bg-gradient-to-t from-sky-50  to-gray-200 text-slate-900 `}>
        <Providers>
          <div className=" h-full w-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
