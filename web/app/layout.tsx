import type { ReactNode } from 'react';

export const metadata = {
  title: 'CallStudio',
  description: 'CallStudio React/Next frontend',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

