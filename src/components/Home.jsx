import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from 'framer-motion';
function Home({closeMenu}) {
  return <>
    <div className="home" id='home' onClick={closeMenu}>
        <motion.div
         initial={{
          left:"-100vw"
      }}
      animate={{
          left:"0"
      }}
      transition={{
          duration:0.5,
          ease:"backInOut"
      }}
        className="homefirst">
        <h1>WELCOME TO MY DESIGN PORTFOLIO</h1>
        <div className="homebutton">
            <a href="#about">Morenike Oyedeji;UI Designer</a>
        </div>
        </motion.div>
        <motion.div
          initial={{
            right:"-100vw"
          }}
          animate={{
            right:"0"
          }}
          transition={{
            duration:0.5,
            ease:"backInOut"
          }}
        className="homesecond">
        <a href="#designs">
        <img src='/images/newprof.png' />
        </a>
       <a href="#contact"><p> <BsArrowReturnRight className='arrow' /> Work with me today</p></a>
        </motion.div>
    </div>
  </>
}

export default Home