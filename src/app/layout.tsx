import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';

export const metadata: Metadata = {
  title: 'Portofolio Rakha',
  description: 'Portofolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-16"> 
          {children}
        </main>
      </body>
    </html>
  );
}