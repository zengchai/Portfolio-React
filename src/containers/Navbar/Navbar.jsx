import React, { useEffect, useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = ({boolean,passingvalue}) => {
    const [isOpen,setIsOpen] = useState(localStorage.getItem('DefaultSwitching') === '1' ? false : true);
    const [is1Open,set1IsOpen] = useState(localStorage.getItem('PageSwitching') === '2' ? true : false);
    const [is2Open,set2IsOpen] = useState(localStorage.getItem('PageSwitching') === '3' ? true : false);
    const [is3Open,set3IsOpen] = useState(false);
    const [theme,settheme] = useState(localStorage.getItem('themeSwitching') ===  'true' || false);
    const [isSmallScreen,setIsSmallScreen] = useState(false);

    const handlechange = () => {
        setIsOpen(true);
        set1IsOpen(false);
        set2IsOpen(false);
        set3IsOpen(false);
        localStorage.setItem("PageSwitching",'');
        localStorage.setItem("DefaultSwitching",'');
    }
    const handle1change = () => {
        set1IsOpen(true);
        setIsOpen(false);
        set2IsOpen(false);
        set3IsOpen(false);
        localStorage.setItem("PageSwitching",'2');
        localStorage.setItem("DefaultSwitching",'1');
    }
    
    const handle2change = () => {
        set2IsOpen(true);
        setIsOpen(false);
        set1IsOpen(false);
        set3IsOpen(false);
        localStorage.setItem("PageSwitching",'3');
        localStorage.setItem("DefaultSwitching",'1');
    }

    useEffect(() => { function handleResize() {
        setIsSmallScreen(window.matchMedia('(max-width: 768px)').matches);
      }
      handleResize(); // Set the initial screen size
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const goToHead = () =>{
        window.scrollTo(0, 0);
    }
    
    const handletheme = () =>{
        settheme(!theme);
        passingvalue(!theme);
        localStorage.setItem("themeSwitching",!theme);
    }

    return(
    <div className={`header ${boolean?'header_shadow':''}`}>
    <nav className="nav container">
        <div onClick={goToHead} className="nav_logo">Loy</div>
    <div className="nav_menu" id="nav-menu" style={{ bottom: is3Open?'0':''}}>
        <ul className="nav_list grid">
        <li className="nav_item">
            <NavLink to="/home" onClick={handlechange}><div className="nav_link items" style={{color : isOpen ? "var(--first-color)": "var(--title-color)"}}>
            Home</div>
            </NavLink>
        </li>
        <li className="nav_item">
            <NavLink to="/projects"  onClick={handle1change}>
            
            <div className="nav_link items" style={{color : is1Open ? "var(--first-color)": "var(--title-color)"}}>Project</div>
            </NavLink>
        </li>
        <li className="nav_item">
            <NavLink to="/contact"  onClick={handle2change}>
            <div className="nav_link items" style={{color : is2Open ? "var(--first-color)": "var(--title-color)"}}>
            Contact</div>
            </NavLink>
        </li>
        </ul>
        <i className="uil uil-times nav_close" id="nav-close" onClick={()=>set3IsOpen(!is3Open)}></i>
    </div>
    <div className="nav_btns">
        <i  onClick={handletheme} className={`uil change-theme ${theme ?'uil-sun':'uil-moon'}`} id="theme-button"></i>
        {isSmallScreen && (<div className="nav_toggle" id="nav-toggle">
        <i className="uil uil-apps" onClick={()=>set3IsOpen(!is3Open)}></i>
        </div>)}
    
    </div>
    
    </nav>
    </div>)
}

export default Navbar;