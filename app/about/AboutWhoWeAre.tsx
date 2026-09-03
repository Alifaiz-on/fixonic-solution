"use client";

import { motion } from "framer-motion";


const stats = [
  {
    number:"150+", 
    label:"Projects Delivered"
  },
  {
    number:"8+",
    label:"Digital Services"
  },
  {
    number:"100%",
    label:"Client Focus"
  },
  {
    number:"5+",
    label:"Years Experience"
  }
];


export default function AboutWhoWeAre(){

return(

<section className="who-section">


<div className="who-glow"></div>


<div className="who-container">


<motion.div
className="who-title"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
>

<span>
ABOUT FIXONIC
</span>

<h2>
WHO WE
<br/>
ARE
</h2>

</motion.div>



<motion.div
className="who-content"

initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}

>


<p>
We are a team of passionate designers, developers,
marketers, and technology experts committed to
delivering high-quality digital solutions for startups,
small businesses, and enterprises.
</p>


<p>
By understanding each client's goals, target audience,
and industry, we develop customized strategies that
help businesses stand out in today's competitive
digital landscape.
</p>



<div className="who-stats">

{
stats.map((item)=>(
<div key={item.label}>

<h3>
{item.number}
</h3>

<p>
{item.label}
</p>

</div>
))
}

</div>


</motion.div>


</div>


</section>

)

}