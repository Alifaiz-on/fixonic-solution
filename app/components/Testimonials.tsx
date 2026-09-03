"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const testimonials = [
  {
    text: "Working with Fixonic Solutions was one of our best decisions. Their team delivered a professional website, improved our online visibility, and exceeded every expectation.",
    name: "KIM NATAMO",
    role: "Developer",
  },
  {
    text: "Fixonic Solutions transformed our online presence with a clean strategy and professional execution. The results exceeded what we expected.",
    name: "AHMED KHAN",
    role: "Business Owner",
  },
  {
    text: "The team understood our requirements perfectly and delivered a digital solution that helped our business grow.",
    name: "SARAH ALI",
    role: "Marketing Manager",
  },
];


export default function Testimonials() {

  const [active, setActive] = useState(0);

  const current = testimonials[active];


  return (

    <section className="testimonial-section">

      <div className="testimonial-container">


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
        >
          TRUSTED BY
          <br/>
          BUSINESSES ACROSS
          <br/>
          INDUSTRIES
        </motion.h2>



        <div className="testimonial-grid">


          {/* LEFT CARD */}

          <motion.div
            className="trust-card"
            initial={{
              opacity:0,
              y:30
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:true
            }}
          >

            <div className="quote-icon">
              “
            </div>


            <h3>
              150+ Successful
              <br/>
              Projects
            </h3>


            <p>
              Why clients rely on us!
            </p>


          </motion.div>





          {/* RIGHT CAROUSEL */}


          <motion.div
            className="review-card"
            initial={{
              opacity:0,
              y:30
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            viewport={{
              once:true
            }}
          >


            <div className="review-content">


              <AnimatePresence mode="wait">


                <motion.div

                  key={active}

                  initial={{
                    opacity:0,
                    x:50
                  }}

                  animate={{
                    opacity:1,
                    x:0
                  }}

                  exit={{
                    opacity:0,
                    x:-50
                  }}

                  transition={{
                    duration:0.35
                  }}

                >


                  <p className="review-text">
                    "{current.text}"
                  </p>



                  <div className="review-author">

                    <strong>
                      {current.name}
                    </strong>

                    <span>
                      {current.role}
                    </span>

                  </div>


                </motion.div>


              </AnimatePresence>


            </div>




            <div className="dots">


              {testimonials.map((_,index)=>(


                <button

                  key={index}

                  onClick={() => setActive(index)}

                  className={
                    active === index
                    ? "active"
                    : ""
                  }

                />

              ))}


            </div>



          </motion.div>



        </div>


      </div>


    </section>

  );
}