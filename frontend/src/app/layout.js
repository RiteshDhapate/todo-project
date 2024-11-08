import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "react-hot-toast";

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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <NextTopLoader />
          <Toaster />
        <div
      className="min-h-screen bg-[#0A0A0B] bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Animated background effects */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-slow-spin"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main
          className="container mx-auto px-4 py-16 mt-16"
        >
          {" "}
          {/* Added mt-16 for header spacing */}
          {children}
        </main>
        <Footer />
      </div>
    </div>
      </body>
    </html>
  );
}












