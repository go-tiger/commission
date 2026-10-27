import type { Metadata } from "next";
import { Noto_Sans_KR, Silkscreen } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "마인크래프트 커스텀 런처 & 게임 서버 외주",
  description: "마인크래프트 커스텀 런처와 게임 서버 외주 개발 - 고랑",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${silkscreen.variable}`}>
      <body>{children}</body>
    </html>
  );
}
