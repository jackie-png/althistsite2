"use client"
import localFont from "next/font/local";
import "./globals.css";
import {Noto_Serif} from 'next/font/google'
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
const notoSerif = Noto_Serif({
  subsets:['latin'],
  weight: '400',
  variable: '--font-notoSerif'
})

export default function RootLayout({ children }) {
  const router = usePathname();
  console.log(router === "/")
  return (
    <html lang="en" className="bg-snow m-0 p-0 box-border overflow-x-hidden">
      <body
        className={`${notoSerif.variable} font-notoSerif relative m-0 p-0 box-border overflow-x-hidden`}
      >
        <div className={`${router === "/" ? "hidden" : ""}`}>
          <Navbar/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
