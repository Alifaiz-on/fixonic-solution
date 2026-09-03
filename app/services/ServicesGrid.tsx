"use client";

import { useRef } from "react";


const services = [

{
title:"Website Development",
text:"High-performance websites built with modern technologies to improve your online presence and business growth."
},

{
title:"UI/UX Design",
text:"User-focused digital experiences designed to make your website simple, attractive, and easy to use."
},

{
title:"SEO Optimization",
text:"Strategic SEO solutions that improve rankings, visibility, and bring organic traffic to your business."
},

{
title:"Digital Marketing",
text:"Performance-driven campaigns that connect your brand with the right audience."
},

{
title:"AI Solutions",
text:"Smart automation and AI-powered solutions that improve productivity and efficiency."
},

{
title:"Custom Web Applications",
text:"Scalable web applications designed around your business requirements."
},

{
title:"Mobile App Development",
text:"Modern mobile applications built to improve customer engagement."
}

];



export default function ServicesGrid(){


const scrollRef = useRef<HTMLDivElement>(null);



const handleWheel = (e:React.WheelEvent)=>{


const container = scrollRef.current;


if(!container) return;



const maxScroll =
container.scrollHeight - container.clientHeight;



const current =
container.scrollTop;



const down =
e.deltaY > 0;


const up =
e.deltaY < 0;



// keep page fixed while services can move

if(
(down && current < maxScroll) ||
(up && current > 0)
){

e.preventDefault();

e.stopPropagation();


container.scrollTop += e.deltaY;


}



};



return (

<section className="services-section">



<h2 className="services-heading">

WHAT WE CAN DO <span>FOR YOU?</span>

</h2>




<div className="services-box">



<div

ref={scrollRef}

onWheelCapture={handleWheel}

className="services-scroll"

>



{

services.map((service,index)=>(


<div

className="service-item"

key={index}

>


<div className="service-arrow">

↘

</div>



<div className="service-name">

<h3>
{service.title}
</h3>

</div>



<div className="service-text">

<p>
{service.text}
</p>

</div>


</div>


))

}



</div>




<div className="services-cta">


<h3>
Free consultation
</h3>


<button>
SCHEDULE A FREE CALL ↗
</button>


</div>



</div>



</section>

)

}