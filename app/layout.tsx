import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "RH | Rezkita & Haris",
  description: "Rezkita & Haris - A Journey Begins",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#faf9f6] text-gray-900 font-sans">
        <SiteHeader />
        <div className="pt-16">{children}</div>
        <footer className="w-full py-4 bg-black text-white text-center text-xs">
          <p>DESIGNED BY REZKITA & HARIS</p>
        </footer>
      </body>
    </html>
  );
}
