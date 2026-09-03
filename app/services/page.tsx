import "./services.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import ServiceProcess from "./ServiceProcess";
import ServicesWhyChoose from "./ServicesWhyChoose";
import ServicesCTA from "./ServicesCTA";


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