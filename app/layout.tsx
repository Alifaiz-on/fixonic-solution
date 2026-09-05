import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SchemaMarkup from "./components/SchemaMarkup";

export const metadata: Metadata = {

  metadataBase: new URL(
  "https://fixonic-solution.vercel.app"
), 

  title: {
    default: "Fixonic Solutions | Web Development & Digital Solutions",
    template: "%s | Fixonic Solutions",
  },
  description:
    "Fixonic Solutions helps businesses grow with website development, SEO, digital marketing, UI/UX design and AI solutions.",

      keywords: [
    "web development",
    "website development",
    "SEO services",
    "digital marketing",
    "UI UX design",
    "AI solutions",
    "domain hosting",
    "Fixonic Solutions",
  ],


  openGraph: {

    title:
      "Fixonic Solutions | Web Development & Digital Growth",

    description:
      "Modern websites, SEO, marketing and AI solutions designed to help businesses grow.",

    siteName:
      "Fixonic Solutions",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Fixonic Solutions",
      },
    ],

    type: "website",

  },


  twitter: {

    card: "summary_large_image",

    title:
      "Fixonic Solutions | Web Development & Digital Solutions",

    description:
      "Web development, SEO, digital marketing and AI solutions for businesses.",

    images:[
      "/images/logo.png"
    ],

  },

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

return (

<html lang="en">

<body>


<SmoothScroll>

<SchemaMarkup />

<Header />


{children}


<Footer />


</SmoothScroll>


</body>

</html>

);

}