"use client";

import { useEffect, useRef } from "react";


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

const boxRef = useRef<HTMLDivElement>(null);
const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const box = boxRef.current;
  const container = scrollRef.current;
  if (!box || !container) return;

  const handleWheel = (e: WheelEvent) => {
    // On mobile screens, let page scroll naturally
    if (window.innerWidth <= 768) return;

    // Stop propagation to window/Lenis
    e.stopPropagation();

    const { scrollTop, scrollHeight, clientHeight } = container;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) {
      e.preventDefault();
      return;
    }

    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;
    const isAtTop = scrollTop <= 1;
    const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;

    // Prevent page scroll when reached boundary
    if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
      e.preventDefault();
      return;
    }

    // If mouse is on the outer box/CTA, redirect wheel scroll into the scrollable list
    if (e.target && !container.contains(e.target as Node)) {
      e.preventDefault();
      container.scrollBy({ top: e.deltaY, behavior: "auto" });
    }
  };

  box.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    box.removeEventListener("wheel", handleWheel);
  };
}, []);

return (

<section className="services-section">



<h2 className="services-heading">

WHAT WE CAN DO <span>FOR YOU?</span>

</h2>





<div
  ref={boxRef}
  className="services-box"
  data-lenis-prevent
>





<div

ref={scrollRef}

className="services-scroll"

data-lenis-prevent

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