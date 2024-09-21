import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import "./prism.css";
import { MobileNavBar, NavBar } from "./components/NavBar";
import Link from "next/link";
import { routes } from "./data/routes";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Lexend({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next JS Markdown Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-blue-100`}>
        <MobileNavBar />
        <NavBar />
        <div className="pt-16 px-8 pb-8">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-C7NHJXQQ24" />
    </html>
  );
}
