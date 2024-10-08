import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { motion } from "framer-motion";
function Contact({closeMenu}){
    return<>
    <div className="contact" id="contact" onClick={closeMenu}>
        <motion.h1
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
      }}>Reach Out To Me</motion.h1>
        <motion.div 
         initial={{
          x:100,
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
        className="des">
       <a href="https://www.bing.com/maps?q=Lagos+Nigeria+on+the+map&FORM=HDRSC6&cp=6.543461%7E3.373177&lvl=11.0" target="_blank">
       <motion.div 
       whileHover={{
        scale:1.05
      }}
        transition={{
            duration:0.1,
            ease:"easeInOut"
          }}
       className="location">
            <CiLocationOn className="icon" />
            <p>Address</p>
            <p style={{color:"grey"}}>Lagos, Nigeria</p>
        </motion.div>
       </a>
       <a href="mailto:oyedejimorenike@gmail.com" target="_blank">
        <motion.div
        whileHover={{
            scale:1.05
          }}
            transition={{
                duration:0.1,
                ease:"easeInOut"
              }}
        className="email">
            <MdOutlineEmail className="icon" />
            <p>Email</p>
            <p style={{color:"grey"}}>oyedejimorenike@gmail.com</p>
        </motion.div>
        </a>
        <a href="tel:+2348145391738" target="_blank">
        <motion.div
        
        whileHover={{
            scale:1.05
          }}
            transition={{
                duration:0.1,
                ease:"easeInOut"
              }}className="phone">
            <BsTelephone className="icon" />
            <p>Phone</p>
            <p style={{color:"grey"}}>+2348145391738</p>
        </motion.div>
        </a>
        </motion.div>
    </div>
    </>
}

export default Contact