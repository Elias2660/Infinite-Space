import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinite Scroll Test",
  description: "Check out project on github!",
  icons: {
    icon:  "/images/icons/favicon.ico",
    shortcut:  "/images/icons/favicon-32x32.png",
    apple: "/images/icons/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <base href={'/'} />
        <link rel="apple-touch-icon" sizes="180x180" href={"/images/icons/apple-touch-icon.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href={"/images/icons/favicon-32x32.png"} />
        <link rel="icon" type="image/png" sizes="16x16" href={"/images/icons/favicon-16x16.png"} />
        <link rel="manifest" href={"/site.webmanifest"} />
        <link rel="mask-icon" href={"/images/icons/safari-pinned-tab.svg"} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
