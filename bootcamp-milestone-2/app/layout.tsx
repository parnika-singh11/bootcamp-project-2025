import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";


// If you are experiencing an error "localFont is undefined", you might need to add the following blocks of code
const inter = Inter({ subsets: ["latin"] });

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
//

export const metadata: Metadata = {
  title: "Parnika's Personal Website",
  description: "A personal website for Parnika.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
		// returns boilerplate
  return (
    <html lang="en">
      <body className={inter.className}> //remember Inter is simply the font I chose.
	        <Navbar/> // This sets the navbar on every page 
        {children}
        </body>
      
    </html>
  );
}