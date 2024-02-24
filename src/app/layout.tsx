import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tack",
  description: "Minimalistic boards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-5 bg-neutral-950">
          <a href="" className="font-black text-xl">Tack</a>
        </header>
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
