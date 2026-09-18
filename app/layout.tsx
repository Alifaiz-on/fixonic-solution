import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SchemaMarkup from "./components/SchemaMarkup";
import Preloader from "./components/Preloader";


export const metadata: Metadata = {


  metadataBase: new URL(
    "https://www.fixonicsolutions.com"
  ),



  title: {
    default:
      "Fixonic Solutions | Web Development, SEO & Digital Solutions",

    template:
      "%s | Fixonic Solutions",
  },



  description:
    "Fixonic Solutions provides website development, SEO, digital marketing, UI/UX design, AI automation and hosting solutions to help businesses grow online.",



  keywords: [

    "Fixonic Solutions",

    "web development company",

    "website development services",

    "custom website development",

    "SEO services",

    "digital marketing agency",

    "UI UX design services",

    "AI automation solutions",

    "domain and hosting services",

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







  openGraph: {


    title:
      "Fixonic Solutions | Web Development & Digital Solutions",



    description:
      "Modern websites, SEO strategies, digital marketing and AI solutions designed to help businesses grow.",



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
          "Fixonic Solutions",

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
      "Fixonic Solutions | Web Development & Digital Solutions",



    description:
      "Website development, SEO, digital marketing, UI/UX design and AI solutions for growing businesses.",



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


<html lang="en">


<body>



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