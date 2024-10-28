import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import { ToastProvider } from '@/store/ToastContext/ToastContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chad',
  description: 'Chad Web Format',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ToastProvider>
      </body>
    </html>
  );
}
