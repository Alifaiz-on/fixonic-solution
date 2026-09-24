import "./contact.css";

import ContactHero from "./ContactHero";
import ContactSection from "./ContactSection";
import ContactMap from "./ContactMap";


export default function ContactPage(){

return(

<main>

<ContactHero />


<section className="contact-wrapper">

<ContactSection />

<ContactMap />

</section>


</main>
  );
}