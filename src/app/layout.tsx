import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wow",
  description: `Ứng dụng du lịch thông minh giúp bạn tìm đường đi tối ưu nhất giữa nhiều địa điểm, khám phá những trải nghiệm tuyệt vời và nhận thưởng từ mỗi chuyến đi.`,
  keywords: [
    "du lịch",
    "bản đồ",
    "địa điểm",
    "tìm đường",
    "giải thưởng",
    "trải nghiệm",
    "ứng dụng",
    "lập trình",
    "travel",
    "maps",
    "route planner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
