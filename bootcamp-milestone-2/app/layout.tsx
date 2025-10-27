import type { Metadata } from "next"; 
import { Inter } from "next/font/google"; 
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar";



const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Parnika's Personal Website",
  description: "A personal website for Parnika.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}> 
	        <Navbar/> 
        {children}
        </body>
      
    </html>
  );
}