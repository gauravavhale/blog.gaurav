import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar/Navbar";
import { Footer } from "@/Components/Footer/Footer";
import { ThemeToggle } from "@/Components/ThemeToggle/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head className="dark">
        <title>gaurav.blog</title>
        <link rel="icon" href="images/avatar.png" ></link>
        <meta name="theme-color" content="#121212; " />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        <ThemeToggle />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
