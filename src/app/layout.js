import localFont from "next/font/local";
import "./globals.css";
import {Noto_Serif} from 'next/font/google'
import Navbar from "./components/Navbar";

const notoSerif = Noto_Serif({
  subsets:['latin'],
  weight: '400',
  variable: '--font-notoSerif'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-snow m-0 p-0 box-border overflow-x-hidden">
      <body
        className={`${notoSerif.variable} font-notoSerif relative m-0 p-0 box-border overflow-x-hidden`}
      >
        <div className="sticky top-0 z-50">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
