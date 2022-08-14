import React from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import About from "../components/About/About"
import Skill from "../components/Skills/Skill"
import Projects from "../components/Projects/Projects"
import Contact from '../components/Contact/Contact'

const HomePage = () => {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage
