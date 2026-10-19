import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#FAF9F6] font-sans text-[#1F1F1F] antialiased">
        {children}
      </body>
    </html>
  );
}
