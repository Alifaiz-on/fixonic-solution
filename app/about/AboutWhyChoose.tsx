"use client";

import { motion } from "framer-motion";


const reasons = [
  {
    icon: "♙",
    title: "Expert Team",
    text:
      "Work with experienced designers, developers, and digital marketers dedicated to delivering high-quality solutions.",
    dark: true,
  },
  {
    icon: "⚙",
    title: "Custom Solutions",
    text:
      "Every business is unique. We create tailored strategies and digital products that match your specific goals and requirements.",
    dark: false,
  },
  {
    icon: "⚙",
    title: "Fast Delivery",
    text:
      "Our streamlined workflow ensures projects are completed on time without compromising quality or performance.",
    dark: true,
  },
  {
    icon: "⚙",
    title: "Transparent Communication",
    text:
      "Stay informed throughout your project with clear updates, dedicated support, and complete project transparency.",
    dark: false,
  },
  {
    icon: "⚙",
    title: "Scalable Growth",
    text:
      "We build future-ready websites and digital solutions that grow with your business and adapt to changing needs.",
    dark: true,
  },
];



function WhyCard({ item }: any) {

return (

<motion.div
className={`why-card ${item.dark ? "dark-card" : "light-card"}`}

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
duration:.6
}}

>


<div className="why-icon">
{item.icon}
</div>


<div className="why-content">

<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>


</motion.div>

)

}



export default function AboutWhyChoose(){


return (

<section className="why-section">


<div className="why-grid">


<motion.div

className="why-intro"

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

>


<h2>
WHY CHOOSE US
</h2>


<p>
We deliver innovative digital solutions that help businesses grow faster,
improve their online presence, and achieve measurable results through
strategy, creativity, and technology.
</p>


</motion.div>



<WhyCard item={reasons[0]} />


<WhyCard item={reasons[1]} />



<div className="empty-box"></div>



<WhyCard item={reasons[2]} />


<WhyCard item={reasons[3]} />


<WhyCard item={reasons[4]} />



</div>


</section>

);

}