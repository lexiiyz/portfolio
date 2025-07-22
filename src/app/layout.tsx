import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import AOSInitializer from './components/AOSInitializer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Raditya Rakha Portfolio',
  description: 'Personal portfolio of Raditya Rakha, a Fullstack Web Developer and UI/UX Designer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <AOSInitializer /> 
      </body>
    </html>
  );
}