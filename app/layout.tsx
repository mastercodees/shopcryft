import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ClerkProvider } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: {
    default: "ShopCryft online Store",
    template: "%s | ShopCryft",
  },
  description: "ShopCryt online store for all your shopping needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppin antialiased">
          <Header /> {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
