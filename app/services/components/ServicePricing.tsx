"use client";

import { motion } from "framer-motion";
import "./ServicePricing.css";


export default function ServicePricing({data}:any){


if(!data?.pricing){

return null;

}



return(

<section className="pricing-section">


<div className="pricing-container">



<div className="pricing-heading">


<span>
PRICING
</span>


<h2>

{data.pricing.title}

</h2>



<p>

{data.pricing.description}

</p>


</div>






<div className="pricing-grid">


{

data.pricing.plans?.map((plan:any,index:number)=>(


<motion.div

key={index}

className={`pricing-card ${
plan.popular ? "popular" : ""
}`}

whileHover={{
y:-10
}}

transition={{
duration:.3
}}

>



{

plan.popular &&

<div className="popular-tag">

MOST POPULAR

</div>

}





<h3>

{plan.name}

</h3>




<div className="price">

{plan.price}

</div>




<p className="plan-desc">

{plan.description}

</p>





<ul>


{

plan.features?.map((item:string,i:number)=>(


<li key={i}>

<span>
✓
</span>

{item}

</li>


))

}


</ul>





<a href="#contact">

Start Project ↗

</a>




</motion.div>


))


}


</div>



</div>


</section>

)

}