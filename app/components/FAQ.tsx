"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const leftFaqs = [
  {
    question: "What's the difference between the retainer and project-based model?",
    answer:
      "A project-based model is ideal for specific deliverables like websites, branding, or apps. A retainer gives ongoing access to our team for continuous digital support."
  },
  {
    question: 'What counts as "one active task at a time"?',
    answer:
      "One active task means our team focuses on one priority deliverable at a time to maintain quality and faster execution."
  },
  {
    question: "How does communication work during a project?",
    answer:
      "We maintain clear communication through updates, feedback rounds, and project management tools."
  },
  {
    question: "How do unlimited revisions work?",
    answer:
      "We continue refining the work until it matches the agreed project direction."
  },
  {
    question: "Can I pause or cancel my retainer?",
    answer:
      "Yes, retainer plans can be paused or adjusted according to your business needs."
  }
];


const rightFaqs = [
  {
    question: "What if I need more hours than my plan includes?",
    answer:
      "Additional hours can be added depending on your requirements."
  },
  {
    question: "Do you only do design, or can you build the website too?",
    answer:
      "We provide complete solutions including design, development, SEO, and digital marketing."
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, we work with startups, SMEs, and established companies."
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Pricing depends on scope, features, and requirements."
  },
  {
    question: "How fast will I receive designs?",
    answer:
      "Timelines depend on project complexity and deliverables."
  }
];



function FAQItem({
  item,
  index,
  open,
  setOpen
}:any){

return (

<div className="faq-item">


<button
onClick={()=>setOpen(open===index ? null:index)}
>


<span>
{item.question}
</span>


<div className={`faq-arrow ${open===index ? "active":""}`} />

</button>



<AnimatePresence>


{
open===index && (

<motion.div

className="faq-answer"

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

exit={{
height:0,
opacity:0
}}

>

<p>
{item.answer}
</p>

</motion.div>

)

}


</AnimatePresence>


</div>

)

}





export default function FAQ(){


const [leftOpen,setLeftOpen] = useState<number|null>(null);

const [rightOpen,setRightOpen] = useState<number|null>(null);



return (

<section className="faq-section">


<div className="faq-container">


<h2>
Frequently Asked <strong className="grey-Heading">
  Questions
</strong></h2>



<div className="faq-grid">


<div className="faq-column">

{
leftFaqs.map((item,index)=>(

<FAQItem

key={index}

item={item}

index={index}

open={leftOpen}

setOpen={setLeftOpen}

/>

))
}

</div>




<div className="faq-column">

{
rightFaqs.map((item,index)=>(

<FAQItem

key={index}

item={item}

index={index}

open={rightOpen}

setOpen={setRightOpen}

/>

))
}

</div>



</div>


</div>


</section>

)

}