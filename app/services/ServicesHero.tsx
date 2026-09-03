"use client";

import { motion } from "framer-motion";


export default function ServicesHero(){

return(

<section className="services-hero">


<div className="services-hero-glow"></div>


<div className="services-hero-container">


<motion.div

className="services-hero-content"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<span>
OUR SERVICES
</span>


<h1>
DIGITAL SOLUTIONS
<br/>
THAT HELP
<br/>
BUSINESSES GROW.
</h1>


<p>
We create powerful digital experiences through technology,
design, and strategy. From websites to marketing solutions,
we help businesses build a stronger online presence.
</p>





</motion.div>



<motion.div

className="services-hero-card"

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

>


<div className="hero-card-box">

<span>
01
</span>

<h3>
Complete Digital Solutions
</h3>

<p>
Web development, branding,
SEO, marketing and automation
under one roof.
</p>


</div>


</motion.div>



</div>


</section>

)

}