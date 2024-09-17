import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
function Contact({closeMenu}){
    return<>
    <div className="contact" id="contact" onClick={closeMenu}>
        <h1>Reach Out To Me</h1>
        <div className="des">
       <a href="https://www.bing.com/maps?q=Lagos+Nigeria+on+the+map&FORM=HDRSC6&cp=6.543461%7E3.373177&lvl=11.0" target="_blank">
       <div className="location">
            <CiLocationOn className="icon" />
            <p>Address</p>
            <p style={{color:"grey"}}>Lagos, Nigeria</p>
        </div>
       </a>
       <a href="mailto:oyedejimorenike@gmail.com" target="_blank">
        <div className="email">
            <MdOutlineEmail className="icon" />
            <p>Email</p>
            <p style={{color:"grey"}}>oyedejimorenike@gmail.com</p>
        </div>
        </a>
        <a href="tel:+2348145391738" target="_blank">
        <div className="phone">
            <BsTelephone className="icon" />
            <p>Phone</p>
            <p style={{color:"grey"}}>+2348145391738</p>
        </div>
        </a>
        </div>
    </div>
    </>
}

export default Contact