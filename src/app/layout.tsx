import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AZURE — Exceptional Spaces. Extraordinary Living.",
  description:
    "A considered collection of Dubai's most remarkable homes. Discover contemporary villas, penthouses, and waterfront residences with Azure Real Estate.",
  keywords: [
    "Azure Real Estate",
    "Dubai luxury homes",
    "Palm Jumeirah villas",
    "Dubai penthouses",
  ],
  authors: [{ name: "Azure Real Estate" }],
  icons: {
    icon: "/azure-icon.svg",
  },
  openGraph: {
    title: "AZURE — Exceptional Spaces. Extraordinary Living.",
    description:
      "Remarkable homes. A more personal way to find yours. Explore the Azure collection in Dubai.",
    siteName: "Azure Real Estate",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary",
    title: "AZURE — Exceptional Spaces. Extraordinary Living.",
    description:
      "A considered collection of Dubai's most remarkable homes.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
