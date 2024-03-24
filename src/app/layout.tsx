import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Big_Shoulders_Display } from 'next/font/google'
import { Outfit } from 'next/font/google'

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ['latin'],
  variable: '--font-big-shoulders-display',
})
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Art Gallery",
  description: "The Modern Art Gallery is free to all visitors and open seven days a week ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
