import type { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const zalandoSans = localFont({
  src: [
    {
      path: '../public/fonts/zalando-sans-semiexpanded-latin-wght-normal.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-zalando-sans',
  display: 'swap',
  fallback: ['sans-serif'],
});

export const metadata = {
  title: 'CallStudio',
  description: 'CallStudio React/Next frontend',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${zalandoSans.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

