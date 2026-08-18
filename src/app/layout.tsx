import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dheeraj Kothapalli — Computer Science Student & Developer",
  description:
    "Portfolio of Dheeraj Kothapalli, a Computer Science student at Vellore Institute of Technology crafting database architectures, scalable systems, and machine learning solutions.",
  metadataBase: new URL("https://github.com/dheerajgith"),
  openGraph: {
    title: "Dheeraj Kothapalli — Computer Science Student & Developer",
    description:
      "Crafting scalable systems, database architectures, and data-driven applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dheeraj Kothapalli — Computer Science Student & Developer",
    description:
      "Crafting scalable systems, database architectures, and data-driven applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#0D0F12] text-[#9EADB6] min-h-screen">
        {children}
      </body>
    </html>
  );
}
