import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Fixonic Solutions",
  description:
    "Digital solutions for web development, branding, digital marketing, AI automation, SEO, mobile apps and cloud solutions.",
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


<Header />


{children}


<Footer />


</SmoothScroll>


</body>

</html>

);

}