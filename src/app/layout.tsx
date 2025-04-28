import type { Metadata } from "next";

import "@/styles/globals.css";

import { Patrick_Hand } from "next/font/google";
import localFont from "next/font/local";

// Font Titles
const bobby = localFont({
  src: "../assets/fonts/BobbyJonesSoft.otf",
  variable: "--font-bobby",
});

// Font Texts
const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick",
});

export const metadata: Metadata = {
  title: "Saponíus",
  description: "Jornal de notícias da Choke7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${patrick.variable} ${bobby.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
