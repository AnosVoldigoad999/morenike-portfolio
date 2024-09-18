import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import PROJECTS from './data.json'
import { motion } from 'framer-motion';
function Designs({closeMenu}) {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
      };

      const CustomDots = ({index, onClick, active}) =>{
        return<>
        <button onClick={e=>{e.preventDefault()
        onClick();
        }} className={active?"active-dot":"dot"}/>
        </>
      }

     

  return <>
    <div className="designs" id='designs' onClick={closeMenu}>
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
      }}
        >My Designs</motion.h1>
        <Carousel className="projects" responsive={responsive}   showDots={true} customDot={<CustomDots />} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {PROJECTS.map(project=>{
            return <a href={project.link} target='_blank'>
              <motion.div 
              whileHover={{
                scale:1.05
              }}
                transition={{
                    duration:0.1,
                    ease:"easeInOut"
                  }}
              className="project">
                <img src={project.img} alt="Project Image" />
             <div className="des">
             <h3>{project.name}</h3>
                <p>{project.des}</p>
             </div>
            </motion.div>
            </a>
          })}
        </Carousel>
    </div>
  </>
}

export default Designs