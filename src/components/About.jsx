import React from 'react'

function About({closeMenu}) {
  return <>
    <div className="about" id='about' onClick={closeMenu}>
        <div className="aboutfirst">
        <h1>
            Who is Morenike?
        </h1>
        <p>I'm an entry level UI/UX designer with about two years of experience. I design user friendly and easy to use interfaces for both web and mobile applications and devices. I've designed over twenty mobile and website applications with amazing mockups and I'm looking to do more.</p>
       <hr />
        </div>
      <a href="#designs"><img src="/images/whoismorenike.png" alt="who is morenike" /></a>
    </div>
  </>
}

export default About