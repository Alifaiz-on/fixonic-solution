import type { Metadata } from "next";
import "./services.css";

import Header from "../components/Header";
import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import ServiceProcess from "./ServiceProcess";
import ServicesWhyChoose from "./ServicesWhyChoose";
import ServicesCTA from "./ServicesCTA";


export const metadata: Metadata = {

title: "Services | Fixonic Solutions",

description:
"Explore Fixonic Solutions services including website development, SEO, digital marketing, UI/UX design, AI solutions and domain hosting.",

};



export default function ServicesPage(){

return(

<>

<Header />

<main>

<ServicesHero />

<ServicesGrid />

<ServiceProcess />

<ServicesWhyChoose />

<ServicesCTA />

</main>

</>

)

}