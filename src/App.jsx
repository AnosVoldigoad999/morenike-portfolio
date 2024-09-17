import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Background from './components/Background'
import Designs from './components/Designs'
import Contact from './components/Contact'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
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
        <a href='#home'><motion.li
        whileHover={{
          backgroundColor:"white",
          color:"black"
        }}
        >Home</motion.li></a>
        <a href='#about'><motion.li
            whileHover={{
              backgroundColor:"white",
              color:"black"
            }}>About</motion.li></a>
        <a href='#designs'><motion.li
            whileHover={{
              backgroundColor:"white",
              color:"black"
            }}>Designs</motion.li></a>
        <a href='#contact'><motion.li
            whileHover={{
              backgroundColor:"white",
              color:"black"
            }}>Contact</motion.li></a>
      </ul>
   <label htmlFor='checkbox'>
   <RxHamburgerMenu className='menuIcon' onClick={()=>{setShowMenu(!showMenu)}}  />
   </label>
    </nav>
    <input type='checkbox' id='checkbox' checked={showMenu}/>
  <div className='mobilemenu'>
  <IoMdClose className='menuIcon'  onClick={()=>{setShowMenu(!showMenu)}} />
    <ul>
        <a href='#home'  onClick={()=>{setShowMenu(!showMenu)}}><li>Home</li></a>
        <a href='#about'  onClick={()=>{setShowMenu(!showMenu)}}><li>About</li></a>
        <a href='#designs'  onClick={()=>{setShowMenu(!showMenu)}}><li>Designs</li></a>
        <a href='#contact'  onClick={()=>{setShowMenu(!showMenu)}}><li>Contact</li></a>
      </ul>
      <div></div>
      </div>
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