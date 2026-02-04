import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const reckless = localFont({
  src: [
    {
      path: "../public/fonts/Reckless-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Reckless-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-reckless",
});

const recklessMedium = localFont({
  src: [
    {
      path: "../public/fonts/Reckless-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Reckless-MediumItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-reckless-medium",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Midland Presbyterian",
  description: "Midland Presbyterian Online Leadership Training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${reckless.variable} ${recklessMedium.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
