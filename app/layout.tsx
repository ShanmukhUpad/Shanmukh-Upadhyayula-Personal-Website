import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shanmukh Upadhyayula — CS + GIS",
  description:
    "CS and GIS student at UIUC passionate in AR/VR, Urban Planning, Interactive Computing, Computer Vision, GIS, and HCI.",
  keywords: [
    "Shanmukh Upadhyayula",
    "CS",
    "GIS",
    "UIUC",
    "AR/VR",
    "Urban Planning",
    "HCI",
    "Software Engineer",
  ],
  authors: [{ name: "Shanmukh Upadhyayula" }],
  openGraph: {
    title: "Shanmukh Upadhyayula — CS + GIS",
    description:
      "CS and GIS student at UIUC passionate in AR/VR, Urban Planning, Interactive Computing, Computer Vision, GIS, and HCI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmukh Upadhyayula — CS + GIS",
    description:
      "CS and GIS student at UIUC passionate in AR/VR, Urban Planning, Interactive Computing, Computer Vision, GIS, and HCI.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "var(--color-base)", color: "var(--color-text-primary)" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
