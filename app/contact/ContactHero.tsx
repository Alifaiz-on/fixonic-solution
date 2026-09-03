"use client";

import { motion } from "framer-motion";


export default function ContactHero(){

return(

<section className="contact-hero">


<div className="contact-hero-glow"></div>



<div className="contact-hero-container">



<motion.div

className="contact-hero-content"

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

>


<span>
CONTACT FIXONIC
</span>



<h1>

LET'S CREATE

SOMETHING

DIGITAL.

</h1>



<p>

Have a project in mind? Whether you need a website,
branding, marketing, or a complete digital solution,
our team is ready to help you build and grow.

</p>







</motion.div>





<motion.div

className="contact-visual"

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.8,
delay:.2
}}

>


<div className="contact-card">


<div className="contact-card-icon">
✉
</div>


<h3>
Start Your Project
</h3>


<p>
Tell us your idea and we will turn it into a digital solution.
</p>



<div className="contact-card-line"></div>



<div>
<span>
Email
</span>

<p>
info@fixonicsolution.com
</p>

</div>


</div>



</motion.div>




</div>


</section>

)

}