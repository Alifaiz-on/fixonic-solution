"use client";

import { motion } from "framer-motion";
import "./ServiceSolutions.css";



export default function ServiceSolutions({data}:any){



return(

<section className="solutions-section">


<div className="solutions-container">





<div className="solutions-heading">


<span>
OUR SOLUTIONS
</span>



<h2>

Solutions That
<br/>
Fix These
<br/>
Challenges

</h2>



<p>

We build strategies and systems designed specifically to solve your business problems.

</p>


</div>







<div className="solutions-list">



{

data.solutions.map((item:any,index:number)=>(


<motion.div

key={index}

className="solution-card"

whileHover={{
x:12
}}

>


<div className="solution-header">


<span className="solution-number">

0{index+1}

</span>



<h3>

{item.title}

</h3>



<div className="solution-arrow">

↗

</div>


</div>





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