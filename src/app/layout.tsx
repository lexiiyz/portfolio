import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import AOSInitializer from './components/AOSInitializer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://radityarakha.vercel.app'),
  title: {
    default: 'Raditya Rakha | Fullstack Developer & Cloud Enthusiast',
    template: '%s | Raditya Rakha'
  },
  description: 'Portfolio of Raditya Rakha, a Fullstack Web Developer and DevOps Enthusiast specializing in scalable web solutions, cloud orchestration, and seamless digital experiences.',
  keywords: ['Fullstack Developer', 'DevOps', 'Web Development', 'UI/UX Design', 'Next.js', 'React', 'TypeScript', 'Cloud Computing'],
  authors: [{ name: 'Raditya Rakha' }],
  creator: 'Raditya Rakha',
  openGraph: {
    title: 'Raditya Rakha | Fullstack Developer & Cloud Enthusiast',
    description: 'Explore the portfolio of Raditya Rakha, featuring projects in Web, Mobile, IoT, and DevOps.',
    url: 'https://radityarakha.vercel.app',
    siteName: 'Raditya Rakha Portfolio',
    images: [
      {
        url: '/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Raditya Rakha Portfolio Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raditya Rakha | Fullstack Developer & Cloud Enthusiast',
    description: 'Fullstack Web Developer and DevOps Enthusiast. Check out my latest projects and skills.',
    images: ['/logo.jpeg'],
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  verification: {
    google: 'google23c1f41374d06fc8',
  },
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