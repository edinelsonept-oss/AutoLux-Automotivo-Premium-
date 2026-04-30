import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'AutoLux | Dirija o Futuro',
  description: 'Performance excepcional, luxo inigualável e tecnologia de ponta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#0a0a0a] text-white antialiased overflow-x-hidden selection:bg-[#d4af37] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
