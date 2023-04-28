import React, { useEffect, useState } from 'react'
import {Navbar,Home,Projects,Contact,Footer} from './containers';
import { Routes, Route} from "react-router-dom";
import './app.css';


const App = () =>{

  const [isVisible, setIsVisible] = useState(false);
  const [is1Visible, set1IsVisible] = useState(false);
  const [istheme, setIsTheme] = useState(localStorage.getItem('themeSwitching') ===  'true' || false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to a certain part of the website
      // You can use any logic here to determine when the button should be shown
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      if (scrollPosition > 100) {
        set1IsVisible(true);
      } else {
        set1IsVisible(false);
      }
    };

    // Attach scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToHead =() =>{
    window.scrollTo(0, 0);
  }

  const handletheme = (value) =>{
    setIsTheme(value);
    localStorage.setItem("themeSwitching",value);
  }

    return(
        <div className={`main ${istheme?"dark-theme":""}`}>
            <Navbar boolean={is1Visible} passingvalue={handletheme}/>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
            
            
            <button className={`scroll-button ${isVisible ? 'visible' : ''}`}  onClick={goToHead} >
                <i className="uil uil-arrow-up scrollup_icon"></i>
            </button>
            <Footer/>
        </div>
    )
    
}


export default App