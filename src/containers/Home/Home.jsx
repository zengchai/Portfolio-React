import React from 'react'
import './home.css';
import {Skills,About, Qualification} from '../index'
import Intro from '../Intro/Intro';



const Home = () => {
  return (
  <div className='home_container'>
        
        <Intro/>
        <About/>
        <Skills/>
        <Qualification/>
    
    </div>
  )
}

export default Home
