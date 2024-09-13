import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Background from './components/Background'
import Designs from './components/Designs'
import Contact from './components/Contact'
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from 'framer-motion'
function App() {
  const [showMenu, setShowMenu] = useState(false)
  function closeMenu(){
  setShowMenu(false)
  }
  return <>
    <nav onClick={(e)=>{
      if(e.target.tagName.toLowerCase().includes("nav")){
        setShowMenu(false)
      }
    }} >
      <h2>Morenike</h2>
      <ul>
        <a href='#home'><li>Home</li></a>
        <a href='#about'><li>About</li></a>
        <a href='#designs'><li>Designs</li></a>
        <a href='#contact'><li>Contact</li></a>
      </ul>
   <label htmlFor='checkbox'>
   <RxHamburgerMenu className='menuIcon' onClick={()=>{setShowMenu(!showMenu)}}  />
   </label>
    </nav>
    <input type='checkbox' id='checkbox' checked={showMenu}/>
  <ul className='mobilemenu'>
        <a href='#home'><li>Home</li></a>
        <a href='#about'><li>About</li></a>
        <a href='#designs'><li>Designs</li></a>
        <a href='#contact'><li>Contact</li></a>
      </ul>
    <main>
      <Home closeMenu={closeMenu} />
      <About closeMenu={closeMenu} />
      <hr />
      <Background closeMenu={closeMenu} />
      <Designs closeMenu={closeMenu} />
      <Contact closeMenu={closeMenu} />
    </main>
  </>
}

export default App