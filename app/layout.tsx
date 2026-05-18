import '../styles/globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rulers Studio | Cinematic AI Ad Marketing Agency',
  description: 'We make ads that machines dream of. Awwwards-caliber cinematic AI-driven commercials and marketing campaigns.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased bg-black text-white min-h-screen flex flex-col"
        style={{ cursor: 'none', overflowX: 'hidden' }}
      >
        <CustomCursor />
        <SmoothScroll>
          <main className="flex-1">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
