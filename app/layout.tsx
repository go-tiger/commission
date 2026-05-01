import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "마인크래프트 커스텀 런처 외주",
  description: "마인크래프트 커스텀 런처와 게임 서버 외주 개발 - 고랑",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
