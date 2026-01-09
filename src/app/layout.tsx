import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lux End Furniture | Designing Spaces That Speak Luxury",
  description: "Lux End Furniture offers bespoke interior design and premium furniture for high-net-worth clients, developers, and premium commercial spaces. Elevate your space with our editorial design services.",
  keywords: ["Luxury Interior Design", "Bespoke Furniture", "High-end Interior Services", "Lux End Furniture"],
  openGraph: {
    title: "Lux End Furniture | Designing Spaces That Speak Luxury",
    description: "Mastering the Art of Bespoke Living for the discerning client.",
    images: ["/hero_luxury_interior.png"],
  },
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden selection:bg-black selection:text-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-black overflow-x-hidden w-full relative`}
        suppressHydrationWarning={true}
      >
        <CustomCursor />
        <main className="overflow-x-hidden w-full relative">
          {children}
        </main>
      </body>
    </html>
  );
}


