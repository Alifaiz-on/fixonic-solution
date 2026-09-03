"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./ServiceTechnologies.css";


export default function ServiceTechnologies({data}:any){


const trackRef = useRef<HTMLDivElement>(null);



useEffect(()=>{


const track = trackRef.current;

if(!track) return;


let position = 0;

let baseSpeed = 0.6;

let currentSpeed = baseSpeed;

let direction = 1;

let lastScroll = window.scrollY;

let scrollTimeout:any;

let animation:number;




const handleScroll =()=>{


const currentScroll = window.scrollY;



if(currentScroll > lastScroll){

direction = 1;

}
else if(currentScroll < lastScroll){

direction = -1;

}



currentSpeed = 2.5;



clearTimeout(scrollTimeout);



scrollTimeout=setTimeout(()=>{


currentSpeed = baseSpeed;


},500);



lastScroll=currentScroll;


};





const animate =()=>{


position += currentSpeed * direction;



const loopWidth =
track.scrollWidth / 4;




if(position >= loopWidth){

position = 0;

}



if(position <= 0){

position = loopWidth;

}




track.style.transform =
`translate3d(${-position}px,0,0)`;



animation=requestAnimationFrame(
animate
);



};





window.addEventListener(
"scroll",
handleScroll
);



animation=requestAnimationFrame(
animate
);





return()=>{


window.removeEventListener(
"scroll",
handleScroll
);


cancelAnimationFrame(animation);


clearTimeout(scrollTimeout);


};



},[]);





if(!data?.icons){

return null;

}





return(


<section className="tech-section">



<div className="tech-container">



<span className="tech-label">

TECHNOLOGIES

</span>




<h2>

Tools We Use
<br/>
To Build Better Solutions

</h2>




<p>

We use modern technologies and platforms to create reliable digital solutions.

</p>







<div className="tech-carousel">


<div

className="tech-track"

ref={trackRef}

>


{

[
...data.icons,
...data.icons,
...data.icons,
...data.icons
].map(
(item:string,index:number)=>(


<motion.div

key={index}

className="tech-item"

whileHover={{
scale:1.15
}}

>


<div className="tech-icon">

◆

</div>



<span>

{item}

</span>



</motion.div>


)

)


}



</div>


</div>




</div>


</section>


)

}