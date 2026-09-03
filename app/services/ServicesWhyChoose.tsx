"use client";

import { motion } from "framer-motion";


const stats = [

{
number:"150+",
title:"Projects Delivered",
text:"Websites, digital campaigns and custom solutions successfully delivered."
},

{
number:"8+",
title:"Years Experience",
text:"Helping businesses build strong digital presence through technology."
},

{
number:"35+",
title:"Team Members",
text:"Designers, developers and strategists working together."
},

{
number:"50+",
title:"Brand Partners",
text:"Trusted by businesses across different industries."
}

];



export default function ServicesWhyChoose(){


return (

<section className="why-section">


<div className="why-container">


<h2 className="why-title">

WHY CHOOSE <span>US</span>

</h2>



<div className="why-stats">


{
stats.map((item,index)=>(


<motion.div

key={index}

className="why-stat"

whileHover={{
y:-6
}}

transition={{
duration:.3
}}

>


<h3>

{item.number}

</h3>


<h4>

{item.title}

</h4>


<p>

{item.text}

</p>


</motion.div>


))

}


</div>


</div>


</section>

)

}