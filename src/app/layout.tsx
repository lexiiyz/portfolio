import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import AOSInitializer from './components/AOSInitializer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://radityarakha.my.id'),
  title: {
    default: 'Raditya Rakha Renanda | Fullstack Developer, DevOps & Cloud Enthusiast',
    template: '%s | Raditya Rakha'
  },
  description: 'Portfolio of Raditya Rakha, a Fullstack Web Developer and DevOps Enthusiast specializing in scalable web solutions, cloud orchestration, and seamless digital experiences.',
  keywords: ['Fullstack Developer', 'DevOps', 'Web Development', 'UI/UX Design', 'Next.js', 'React', 'TypeScript', 'Cloud Computing'],
  authors: [{ name: 'Raditya Rakha Renanda' }],
  creator: 'Raditya Rakha Renanda',
  openGraph: {
    title: 'Raditya Rakha Renanda | Fullstack Developer, DevOps & Cloud Enthusiast',
    description: 'Explore the portfolio of Raditya Rakha, featuring projects in Web, Mobile, IoT, and DevOps.',
    url: 'https://radityarakha.my.id',
    siteName: 'Raditya Rakha Portfolio',
    images: [
      {
        url: '/Logo.png',
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
    title: 'Raditya Rakha Renanda | Fullstack Developer, DevOps & Cloud Enthusiast',
    description: 'Fullstack Web Developer and DevOps Enthusiast. Check out my latest projects and skills.',
    images: ['/Logo.png'],
  },
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
  verification: {
    google: 'XhLDKay_eYOKwOl5hkMsuivA1GFDe7IxZAqqdfle7fE',
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
