import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DwellNest: Local Property Listings for Rent and Sale in India",
  description:
    "Discover and list properties for rent or sale in India with DwellNest. Explore local homes, affordable housing, and village properties. Find your dream dwelling today!",
  keywords: [
    "Regional property listings",
    "Rent and sell properties",
    "Local home rentals",
    "Buy homes near me",
    "Affordable housing India",
    "DwellNest properties",
    "Village home listings",
    "Hometown dwellings",
    "Property marketplace",
    "Indian real estate platform",
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
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
