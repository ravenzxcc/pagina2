import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'DiRasche Barbershop | Caballito, Buenos Aires',
  description: 'Premium grooming for the modern man. Experience Caballito\'s most trusted barbershop. Book your appointment today.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-bg-dark text-zinc-200 font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
