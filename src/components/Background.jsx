import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Background({closeMenu}) {
  return <>
    <div className="background" onClick={closeMenu}>
        <h1>My Background</h1>
        <div className="backList">
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
        </div>
    </div>
  </>
}

export default Background