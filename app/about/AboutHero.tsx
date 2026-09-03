"use client";

import { motion } from "framer-motion";
import FluidBackground from "../components/FluidBackground";


export default function AboutHero() {


return (

<section className="about-hero">


<FluidBackground />


<div className="about-hero-overlay" />



<div className="about-hero-inner">



<motion.span

className="about-label"

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

>

ABOUT FIXONIC SOLUTIONS

</motion.span>





<motion.h1

initial={{
opacity:0,
y:60
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1,
ease:[0.16,1,0.3,1]
}}

>


WE CREATE DIGITAL

<br className="desktop-break"/>

SYSTEMS THAT

<br className="desktop-break"/>

HELP BUSINESSES

<br className="desktop-break"/>

GROW.


</motion.h1>






<motion.p

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8,
delay:.3
}}

>


We combine strategy, design, technology and marketing
to create digital experiences that help businesses build
stronger brands and achieve measurable growth.


</motion.p>





<motion.a

href="#contact"

className="about-btn"

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:.5
}}

>

Start a Project ↗

</motion.a>







<div className="about-stats">



<div>

<strong>
150+
</strong>

<span>
Projects Delivered
</span>

</div>




<div>

<strong>
8+
</strong>

<span>
Digital Services
</span>

</div>




<div>

<strong>
100%
</strong>

<span>
Client Focus
</span>

</div>



</div>





</div>



</section>


)

}