import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { Links } from "./links";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const id = 5;
 //ters tırnak ctrl+alt+enterin soltarafındaki virgüle 2 defa basarak yapılıyor => ``
  return (
    <html lang="en">
      <body className={inter.className}>   
        {children}
        <Links />
      </body>
    </html>
  );
}
