// SUIT (웹폰트 직접 import)
import localFont from "next/font/local";
const suit = localFont({
  src: [
    {
      path: "../../public/fonts/SUIT-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-suit",
  display: "swap",
});

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Nanum Myeongjo (2번 추천)
import { Nanum_Myeongjo } from "next/font/google";
const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thank",
  description: "참석 해주셔서 감사합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${suit.variable} ${nanumMyeongjo.variable}`}>
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily:
            "SUIT, Nanum Myeongjo, var(--font-suit), var(--font-geist-sans), var(--font-nanum-myeongjo), serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
