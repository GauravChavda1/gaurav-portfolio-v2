import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
  },
  title: "Gaurav Chavda | Flutter Developer Ahmedabad",

  description:
    "Flutter Developer with 3+ years of experience building production mobile applications using Flutter, Dart, Firebase, REST APIs, MVVM and BLoC. Based in Ahmedabad, India.",

  keywords: [
    "Gaurav Chavda",
    "Flutter Developer",
    "Flutter Developer Ahmedabad",
    "Dart Developer",
    "Mobile App Developer",
    "Firebase",
    "MVVM",
    "BLoC",
    "Flutter freelancer India",
    "Cross-platform mobile developer",
  ],

  authors: [
    {
      name: "Gaurav Chavda",
      url: "https://gauravchavda.in",
    },
  ],

  creator: "Gaurav Chavda",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://gauravchavda.in",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gauravchavda.in",
    title: "Gaurav Chavda | Flutter Developer",
    description:
      "Flutter Developer with 3+ years of experience building high-performance mobile applications with Flutter, Dart, Firebase and modern architecture.",
    siteName: "Gaurav Chavda Portfolio",

    images: [
      {
        url: "https://gauravchavda.in/preview.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Chavda - Flutter Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gaurav Chavda | Flutter Developer",
    description:
      "Flutter Developer with 3+ years of experience building production mobile applications.",
    images: ["https://gauravchavda.in/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}