import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
export const metadata: Metadata = {
  title: "Travel",
  description: "Travel app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
    <link rel="icon" href="/favicon.ico" sizes="any" />
  </head>

      <body>
      <Navbar/>
         {children}
         <Footer/>
         </body>
      
    </html>
  );
}
