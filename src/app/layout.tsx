import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://radityarakha.my.id'),
  title: {
    default: 'Rakha Renanda | Fullstack Developer & DevOps Engineer',
    template: '%s | Rakha'
  },
  description: 'Portfolio of Rakha Renanda — Fullstack Developer & DevOps Engineer building self-hosted infrastructure, cloud systems, and web apps.',
  keywords: [
    'Rakha Renanda',
    'Rakha',
    'Portfolio Rakha',
    'Fullstack Developer',
    'DevOps Engineer',
    'Cloud Engineer',
    'Web Development',
    'Mobile Development',
    'Self-hosted',
    'Proxmox',
    'AWS EC2',
    'Cloud Computing',
    'Docker',
    'n8n',
    'n8n automation',
    'Next.js',
    'React',
    'Flutter',
    'TypeScript',
    'IoT',
  ],
  authors: [{ name: 'Rakha Renanda' }],
  creator: 'Rakha Renanda',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Rakha Renanda | Fullstack Developer & DevOps Engineer',
    description: 'Portfolio of Rakha Renanda — Fullstack Developer & DevOps Engineer building self-hosted infrastructure, cloud systems, and web apps.',
    url: 'https://radityarakha.my.id',
    siteName: 'Rakha Portfolio',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Rakha Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rakha Renanda | Fullstack Developer & DevOps Engineer',
    description: 'Portfolio of Rakha Renanda — Fullstack Developer & DevOps Engineer building self-hosted infrastructure, cloud systems, and web apps.',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rakha Renanda",
              "alternateName": ["Rakha", "Rakha Renanda"],
              "url": "https://radityarakha.my.id",
              "jobTitle": "Fullstack Developer & DevOps Engineer",
              "description": "Fullstack Developer and DevOps Engineer specializing in self-hosted infrastructure, cloud systems, and web & mobile applications.",
              "image": "https://radityarakha.my.id/Logo.png",
              "knowsAbout": [
                "Fullstack Web Development",
                "DevOps & Cloud Engineering",
                "Self-hosted Infrastructure",
                "Proxmox & Virtualization",
                "AWS & Cloud Computing",
                "Docker & Containerization",
                "Mobile Development",
                "n8n Automation"
              ],
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
