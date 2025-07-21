import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';

export const metadata: Metadata = {
  title: 'Portofolio [Nama Kamu]',
  description: 'Portofolio Web Developer',
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
        <main className="pt-16"> {/* Padding untuk offset navbar fixed */}
          {children}
        </main>
      </body>
    </html>
  );
}