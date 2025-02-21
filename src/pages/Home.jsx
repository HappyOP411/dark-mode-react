import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

const Home = () => {
  const [darkmode, setDarkmode]=useState(false)
  return (
    <div>
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode}/>
        <Section darkmode={darkmode} setDarkmode={setDarkmode}/>
        <Footer darkmode={darkmode} setDarkmode={setDarkmode}/>
    </div>
  )
}

export default Home