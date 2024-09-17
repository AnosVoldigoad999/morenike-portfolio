import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import PROJECTS from './data.json'
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
        <h1>My Designs</h1>
        <Carousel className="projects" responsive={responsive}   showDots={true} customDot={<CustomDots />} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {PROJECTS.map(project=>{
            return <a href={project.link} target='_blank'>
              <div className="project">
                <img src={project.img} alt="Project Image" />
             <div className="des">
             <h3>{project.name}</h3>
                <p>{project.des}</p>
             </div>
            </div>
            </a>
          })}
        </Carousel>
    </div>
  </>
}

export default Designs