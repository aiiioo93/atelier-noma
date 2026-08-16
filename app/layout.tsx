import type { Metadata } from "next";
import { Geist, Cormorant_Garamond, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Atelier Noma",
    template: "%s | Atelier Noma",
  },
  description:
    "Studio d'architecture intérieure et de design dédié à la création d'espaces élégants et intemporels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
<body className={`${geist.variable} ${cormorant.variable}`}>
  <Header />
  {children}
  <Footer />
</body>
    </html>
  );
}