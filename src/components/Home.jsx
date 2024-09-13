import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Home({closeMenu}) {
  return <>
    <div className="home" id='home' onClick={closeMenu}>
        <div className="homefirst">
        <h1>WELCOME TO MY DESIGN PORTFOLIO</h1>
        <div className="homebutton">
            <a href="#about">Morenike Oyedeji;UI Designer</a>
        </div>
        </div>
        <div className="homesecond">
        <a href="#designs">
        <img src='/images/newprof.png' />
        </a>
       <a href="#contact"><p> <BsArrowReturnRight className='arrow' /> Work with me today</p></a>
        </div>
    </div>
  </>
}

export default Home