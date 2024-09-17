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
          duration:0.6,
          ease:"backInOut"
      }}
        className="homefirst">
        <h1>WELCOME TO MY DESIGN PORTFOLIO</h1>
        <motion.div className="homebutton"
        whileHover={{
          scale:1.01
        }}
          transition={{
              duration:0.2,
              ease:"easeInOut"
            }}
        >
            <motion.a 
            href="#about">Morenike Oyedeji;UI Designer</motion.a>
        </motion.div>
        </motion.div>
        <motion.div
          initial={{
            right:"-100vw"
          }}
          animate={{
            right:"0"
          }}
          transition={{
            duration:0.6,
            ease:"backInOut"
          }}
        className="homesecond">
        <a href="#designs">
        <motion.img 
        whileHover={{
          scale:1.05
        }}
        transition={{
          duration:0.1,
          ease:"easeInOut"
        }}
        src='/images/newprof.png' />
        </a>
       <motion.a 
       whileHover={{
        scale:1.02
      }}
      transition={{
        duration:0.1,
        ease:"easeInOut"
      }}
       href="#contact"><p> <BsArrowReturnRight className='arrow' /> Work with me today</p></motion.a>
        </motion.div>
    </div>
  </>
}

export default Home