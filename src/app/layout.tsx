import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valens Gym | Built for Real Training",
  description: "A community-focused gym in Schaumburg, IL designed for those who take training seriously. Join the founding movement.",
  keywords: ["Gym", "Schaumburg", "Powerlifting", "Bodybuilding", "Valens", "Personal Training"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}