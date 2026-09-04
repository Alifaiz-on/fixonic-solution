"use client";

import { motion } from "framer-motion";
import "./ServiceOverview.css";


interface IconType{

name:string;

image:string;

}



interface ServiceOverviewProps{

title:string;

description:string;

icons:IconType[];

}



export default function ServiceOverview({

title,

description,

icons

}:ServiceOverviewProps){



return (

<section className="service-overview">


<div className="overview-glow"></div>





<motion.h1

className="overview-title"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

>

{title}

</motion.h1>







<div className="overview-bottom">






<motion.div

className="overview-carousel"

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

transition={{
duration:.8
}}

>





<div className="overview-track">





{

[...icons,...icons].map((icon,index)=>(


<div

className="overview-icon"

key={index}

>



<img

src={icon.image}

alt={icon.name}

/>



</div>


))


}





</div>





</motion.div>










<motion.div

className="overview-description"

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

>





<p>

{description}

</p>





</motion.div>







</div>





</section>


)

}