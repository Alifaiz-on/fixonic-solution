"use client";

import { useRef } from "react";


const services = [

{
title:"Website Development",
text:"High-performance websites built with modern technologies to improve your online presence and business growth.",
href:"/services/website-development"
},

{
title:"UI/UX Design",
text:"User-focused digital experiences designed to make your website simple, attractive, and easy to use.",
href:"/services/ui-ux-design"
},

{
title:"SEO Optimization",
text:"Strategic SEO solutions that improve rankings, visibility, and bring organic traffic to your business.",
href:"/services/seo"
},

{
title:"Digital Marketing",
text:"Performance-driven campaigns that connect your brand with the right audience.",
href:"/services/digital-marketing"
},

{
title:"AI Solutions",
text:"Smart automation and AI-powered solutions that improve productivity and efficiency.",
href:"/services/ai-solutions"
},

{
title:"Domain & Hosting",
text:"Reliable hosting infrastructure designed for speed, security, and performance.",
href:"/services/domain-hosting"
},

];



export default function ServicesGrid(){


const scrollRef = useRef<HTMLDivElement>(null);



const handleWheel = (e:React.WheelEvent)=>{


const container = scrollRef.current;


if(!container) return;



// mobile par custom scroll disable

if(window.innerWidth <= 768){

return;

}



const maxScroll =
container.scrollHeight - container.clientHeight;



const current =
container.scrollTop;



if(

(e.deltaY > 0 && current < maxScroll) ||

(e.deltaY < 0 && current > 0)

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


<a

href={service.href}

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



</a>


))


}





</div>








<div className="services-cta">


<h3>

Free consultation

</h3>



<a

href="/contact"

className="services-cta-button"

>

SCHEDULE A FREE CALL ↗

</a>



</div>





</div>





</section>

)

}