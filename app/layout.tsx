import type { Metadata } from "next";
import { Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "devanagari"],
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "devanagari"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dusmint | Local Shops. Faster to You.",
  description:
    "Groceries, fresh produce, dairy, meat, seafood and more from your trusted neighbourhood shops delivered in 10-30 minutes.",
  keywords: [
    "Dusmint",
    "quick commerce",
    "grocery delivery",
    "local kirana",
    "fresh vegetables",
    "Kolkata",
    "neighbourhood delivery",
  ],
  authors: [{ name: "Dusmint Hyperlocal" }],
  openGraph: {
    title: "Dusmint | Local Shops. Faster to You.",
    description:
      "Order from your trusted neighbourhood shops with 10-30 minute doorstep delivery.",
    url: "https://dusmint.com",
    siteName: "Dusmint",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
