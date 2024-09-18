import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from 'framer-motion';
function Background({closeMenu}) {
  return <>
    <div
    className="background" onClick={closeMenu}>
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
        >My Background</motion.h1>
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
        className="backList">
            <div className="education">
            <p><BsArrowReturnRight className='arrow' /> Education</p>
                <ul>
                    <li>B.Ed from University of Ibadan</li>
                </ul>
            </div>
            <div className="licenses">
            <p><BsArrowReturnRight className='arrow' /> Licenses</p>
                <ul>
                    <li>Udemy complete web and mobile design, 2023.</li>
                    <li>Altlearn technical writing certification, 2022.</li>
                </ul>
            </div>
            <div className="work">
            <p><BsArrowReturnRight className='arrow' />Work Experience</p>
                <ul>
                    <li>Freelance UI Designer and Illustrator, 2023-present.</li>
                    <li>UI/UX Designer at Digicorpus 2022-23.</li>
                    <li>Junior Creative at IOE Analytics,2022. </li>
                </ul>
            </div>
        </motion.div>
    </div>
  </>
}

export default Background