import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import HomeButton from "./components/shared/homeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kornel Uzarowski | Portfolio",
  description: "Portfolio",
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
