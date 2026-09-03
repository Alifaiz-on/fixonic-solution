"use client";

import { motion } from "framer-motion";
import "./ServiceProblem.css";


export default function ServiceProblem({data}:any){


if(!data?.problems){

return null;

}



return(

<section className="problem-section">


<div className="problem-bg-glow"></div>




<div className="problem-container">



<motion.h2

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

{data.problemTitle ? (

data.problemTitle

) : (

<>
Why Most Digital
<br/>
Experiences Fail
</>

)}

</motion.h2>







<div className="problem-stage">





<div className="problem-left">


{

data.problems.map((item:any,index:number)=>(


<motion.div

key={index}

className="problem-card"

whileHover={{
x:10
}}

transition={{
duration:.2
}}

>



<div className="problem-dot"></div>




<div>


<h4>

{item.title}

</h4>



<p>

{item.text}

</p>


</div>



</motion.div>


))


}



</div>









<div className="mockup-wrapper">


<div className="mockup-glow"></div>



<div className="mockup-frame">


<img

src={data.problemImage || "/images/service-mockup.png"}

alt={data.title}

/>


</div>



</div>









<div className="problem-right">



<div className="issue-box">


<span></span>


{data.problemLabel || "Current Problems"}



</div>





<div className="flow-box">


{

data.problems.map((item:any,index:number)=>(


<div

key={index}

>

{item.title}

</div>


))


}



</div>





</div>





</div>





</div>



</section>

)

}