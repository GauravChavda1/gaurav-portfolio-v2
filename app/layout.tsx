import type { Metadata } from "next";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Gaurav Chavda | Flutter Developer Ahmedabad",
//   description:
//     "Flutter Developer with 3+ years shipping production apps in fintech, HR tech and SaaS. Based in Ahmedabad, India. Open to new opportunities.",
//   keywords: [
//     "Flutter Developer",
//     "Dart",
//     "Mobile App Developer",
//     "Ahmedabad",
//     "Gujarat",
//     "Firebase",
//     "MVVM",
//     "BLoC",
//     "Flutter freelancer India",
//     "cross-platform mobile developer",
//   ],
//   authors: [{ name: "Gaurav Chavda" }],
//   creator: "Gaurav Chavda",
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true },
//   },
//   alternates: {
//     canonical: "https://gauravchavda.in",
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_IN",
//     url: "https://gauravchavda.in",
//     title: "Gaurav Chavda | Flutter Developer",
//     description:
//       "Flutter Developer · 3+ years · Fintech · SaaS · HR Tech · Ahmedabad",
//     siteName: "Gaurav Chavda Portfolio",
//     images: [
//       {
//         url: "https://gauravchavda.in/og-image.png", // see below — create this file
//         width: 1200,
//         height: 630,
//         alt: "Gaurav Chavda – Flutter Developer, Ahmedabad",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Gaurav Chavda | Flutter Developer",
//     description: "Flutter Developer · 3+ years · Ahmedabad, India",
//     images: ["https://gauravchavda.in/og-image.png"],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         {/* Preconnect for performance */}
//         <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         {/* Load fonts — at runtime in browser, not at build time */}
//         {/* eslint-disable-next-line @next/next/no-page-custom-font */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="antialiased">{children}</body>
//     </html>
//   );
// }



export const metadata: Metadata = {
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}