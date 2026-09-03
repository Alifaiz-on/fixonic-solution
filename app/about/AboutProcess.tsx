"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    text:
      "We understand your business goals, audience, challenges, and requirements before creating the right digital strategy.",
  },
  {
    number: "02",
    title: "Design & Develop",
    text:
      "Our team transforms ideas into high-performance digital solutions with modern design and scalable technology.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    text:
      "After launch, we optimize and improve your digital presence to achieve long-term growth.",
  },
];


export default function AboutProcess(){

return(

<section className="about-process">


<div className="about-process-container">


<motion.div
className="process-heading"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
>

<span>
OUR PROCESS
</span>

<h2>
How We Turn Ideas Into Digital Solutions
</h2>

<p>
A simple and transparent process designed to create
digital experiences that deliver measurable results.
</p>

</motion.div>



<div className="process-grid">


{
steps.map((step,index)=>(

<motion.div
key={step.number}
className="process-card"

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

transition={{
delay:index*.15
}}

whileHover={{
y:-10
}}

>


<div className="process-number">
{step.number}
</div>


<h3>
{step.title}
</h3>


<p>
{step.text}
</p>


</motion.div>

))
}


</div>


</div>


</section>

)

}