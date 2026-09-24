import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SchemaMarkup from "./components/SchemaMarkup";
import Preloader from "./components/Preloader";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});


export const metadata: Metadata = {


  metadataBase: new URL(
    "https://www.fixonicsolutions.com"
  ),



  title: {
    default:
      "Global Digital Marketing & Web Agency | Fixonic Solutions",

    template:
      "%s | Fixonic Solutions",
  },



  description:
    "Fixonic Solutions is a full-service global digital marketing agency and custom web development partner delivering SEO, performance marketing, and AI automation for businesses worldwide.",



  keywords: [

    "Fixonic Solutions",

    "Global Digital Marketing Agency",

    "International Digital Marketing Agency",

    "Full-Service Digital Agency",

    "Custom Web Development & Digital Solutions",

    "AI Automation & Growth Agency",

    "Digital Transformation Partner",

    "Performance Marketing & SEO Solutions",

    "Digital Solutions for Businesses Worldwide",

    "custom website development",

    "SEO services",

    "UI UX design services",

  ],



  authors: [

    {
      name: "Fixonic Solutions",
      url: "https://www.fixonicsolutions.com",
    },

  ],



  creator:
    "Fixonic Solutions",



  publisher:
    "Fixonic Solutions",



  alternates: {

    canonical:
      "https://www.fixonicsolutions.com",

  },



  icons: {

    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
    ],

    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],

    shortcut: "/favicon.ico",

  },







  openGraph: {


    title:
      "Global Digital Marketing & Web Agency | Fixonic Solutions",



    description:
      "Full-service global digital agency delivering custom web development, SEO, performance marketing, and AI automation for businesses worldwide.",



    url:
      "https://www.fixonicsolutions.com",



    siteName:
      "Fixonic Solutions",



    images: [

      {

        url:
          "/images/logo.png",

        width:
          1200,

        height:
          630,

        alt:
          "Fixonic Solutions - Global Digital Marketing & Web Agency",

      },

    ],



    locale:
      "en_US",



    type:
      "website",

  },




  twitter: {


    card:
      "summary_large_image",



    title:
      "Global Digital Marketing & Web Agency | Fixonic Solutions",



    description:
      "Full-service digital agency delivering custom web development, SEO, performance marketing, and AI automation for businesses worldwide.",



    images:

      [
        "/images/logo.png"
      ],


  },



  robots: {


    index:
      true,


    follow:
      true,


    googleBot: {

      index:
        true,

      follow:
        true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,

    },

  },


};




export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {



return (


<html lang="en" className={manrope.variable}>


<body className={manrope.className}>



<SmoothScroll>


<Preloader />


<SchemaMarkup />


<Header />


{children}


<Footer />


</SmoothScroll>



</body>


</html>


);


}