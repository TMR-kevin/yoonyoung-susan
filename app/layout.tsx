import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "윤영수산(구 오미수산)",
  description: "신선한 수산물을 만나보세요",
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
