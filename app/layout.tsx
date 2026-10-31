import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jessikamarisca.com"),
  title: {
    default: "Jessika Marisca · Product designer who builds",
    template: "%s · Jessika Marisca",
  },
  description:
    "Product designer from Peru, now at the Apple Developer Academy in Naples. AI products, experimentation and native iOS apps in SwiftUI.",
  openGraph: {
    type: "website",
    siteName: "Jessika Marisca",
    locale: "en",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6EEE3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hanken.variable} ${bodoni.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
