"use client";

import { useEffect, useRef } from "react";
import "./ServiceTechnologies.css";


export default function ServiceTechnologies({data}:any){


const trackRef = useRef<HTMLDivElement>(null);

const speedRef = useRef(0.7);

const directionRef = useRef(-1);

const targetSpeed = useRef(0.7);



useEffect(()=>{


const track = trackRef.current;

if(!track) return;


let position = 0;

let animation:number;



const animate = ()=>{


speedRef.current += 
(targetSpeed.current - speedRef.current) * 0.08;



position += speedRef.current * directionRef.current;



const halfWidth = track.scrollWidth / 2;



if(position <= -halfWidth){

position = 0;

}


if(position >= 0){

position = -halfWidth;

}



track.style.transform =
`translate3d(${position}px,0,0)`;



animation = requestAnimationFrame(animate);


};



animation=requestAnimationFrame(animate);



return()=>cancelAnimationFrame(animation);



},[]);





const handleWheel=(e:React.WheelEvent)=>{


if(e.deltaY > 0){

directionRef.current = -1;

}

else{

directionRef.current = 1;

}



targetSpeed.current = 4;



setTimeout(()=>{

targetSpeed.current = 0.7;

},600);



};





if(!data?.icons) return null;



const icons=[

...data.icons,

...data.icons

];



return (

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




<div

className="tech-carousel"

onWheel={handleWheel}

>


<div

className="tech-track"

ref={trackRef}

>


{

icons.map((icon:any,index:number)=>(


<div

className="tech-item"

key={index}

>


<img

src={icon.image}

alt={icon.name}

className="tech-image"

/>


</div>


))


}



</div>


</div>


</div>


</section>

)

}