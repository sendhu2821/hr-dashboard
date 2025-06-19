import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HR DashBoard",
  description:
    "HR Dashboard for managing employees data with features like Bookmark Manager and Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen w-screen overflow-hidden dark:bg-[#444444]">
          <SideBar />
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="max-w-7xl mx-auto w-full">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
