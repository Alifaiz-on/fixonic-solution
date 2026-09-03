import "./contact.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ContactHero from "./ContactHero";
import ContactSection from "./ContactSection";
import ContactMap from "./ContactMap";


export default function ContactPage(){

return(

<>

<Header />


<main>

<ContactHero />


<section className="contact-wrapper">

<ContactSection />

<ContactMap />

</section>


</main>


<Footer />

</>

)

}