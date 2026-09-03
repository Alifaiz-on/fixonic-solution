"use client";


import {motion} from "framer-motion";


export default function ServicesCTA(){


return(

<section className="cta-section">


<div className="cta-box">


<div className="cta-glow"></div>


<motion.div

className="cta-content"

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

viewport={{
once:true
}}

>


<h2>

Ready to build your
<br/>
next digital solution?

</h2>


<p>

Let's discuss your idea and create something
that helps your business grow.

</p>



<button>

<a
  href="/contact"
  className="services-cta-button"
>
  Get a Quote 
</a>

<span>
↗
</span>

</button>


</motion.div>


</div>


</section>

)

}