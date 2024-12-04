import localFont from "next/font/local";
import "./globals.css";
import {Noto_Serif} from 'next/font/google'

const notoSerif = Noto_Serif({
  subsets:['latin'],
  weight: '400',
  variable: '--font-notoSerif'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} font-notoSerif`}
      >
        {children}
      </body>
    </html>
  );
}
