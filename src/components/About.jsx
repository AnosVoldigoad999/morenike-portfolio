import React from 'react'
import { motion } from 'framer-motion'
function About({closeMenu}) {
  return <>
    <div className="about" id='about' onClick={closeMenu}>
       <motion.div
       initial={{
        x:-100,
        opacity:0
       }}
       whileInView={{
        x:0,
        opacity:1
       }}
       transition={{
        duration:1,
        ease:"easeInOut"
       }}
    viewport={{
      once:true
     }}
        className="aboutfirst">
        <h1>
            Who is Morenike?
        </h1>
        <p>I'm an entry level UI/UX designer with about two years of experience. I design user friendly and easy to use interfaces for both web and mobile applications and devices. I've designed over twenty mobile and website applications with amazing mockups and I'm looking to do more.</p>
       <hr />
        </motion.div>
      <motion.a
      initial={{
        x:100,
        opacity:0
      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      whileHover={{
        scale:1.05
      }}
      transition={{
        duration:0.1,
        x:{duration:1},
        opacity:{duration:1},
        ease:"easeInOut"
      }}
viewport={{
  once:true
}}
      href="#designs"><img src="/images/wetalk-mockup.png" alt="who is morenike" /></motion.a>
    </div>
  </>
}

export default About