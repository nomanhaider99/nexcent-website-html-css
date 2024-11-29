import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const roboto = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata: Metadata = {
  title: "QuickSpace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
