import type { Metadata } from "next";
import { Ubuntu, Open_Sans } from "next/font/google";
import "./globals.css";

const fontUbuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ['700'],
  subsets: ["latin"],
});

const fontOpenSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ['400'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Shop",
  description: "Ecommerce demo using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontUbuntu.variable} ${fontOpenSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
