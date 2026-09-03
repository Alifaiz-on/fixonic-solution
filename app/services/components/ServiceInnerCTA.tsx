"use client";

import { motion } from "framer-motion";
import "./ServiceInnerCTA.css";


export default function ServiceInnerCTA({data}:any){


if(!data?.cta){

return null;

}



return(

<section className="inner-cta-section">



<motion.div

className="inner-cta-box"

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
duration:.7
}}

>



<div className="inner-cta-glow"></div>




<div className="inner-cta-content">



<h2>

{data.cta.title}

</h2>



<p>

{data.cta.description}

</p>




<a href="#contact">

{data.cta.button} ↗

</a>



</div>



</motion.div>



</section>

)

}