import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Loader from "@/components/Loader";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Table Turn Media",
  description: "Table Turn Media",
  icons: {
    icon: "/logo.png", // or '/favicon.ico' if you prefer
    // you can add other icons too
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    images: [
      {
        url: "/logo.png", // Path to your logo in public folder
        width: 1200,
        height: 630,
        alt: "Table Turn Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/logo.png", // Same path for Twitter
        width: 1200,
        height: 630,
        alt: "Table Turn Media",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <LenisProvider>
          <Loader />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
