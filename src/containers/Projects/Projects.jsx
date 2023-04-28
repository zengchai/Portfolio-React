import React, { useState } from 'react';
import Services from '../../components/Services/Services';
import spaceshooter from "../../img/spaceshooter.gif";
import portfolio from "../../img/portfolio.gif";
import forestry from "../../img/forestry.gif";
import '../Projects/projects.css';

const Projects = () => {
  
  const [is1Open, set1IsOpen] = useState(false);
  const [is2Open, set2IsOpen] = useState(false);
  const [is3Open, set3IsOpen] = useState(false);

  const open1down = () => {
    set1IsOpen(true);
  };
  const close1down = () => {
    set1IsOpen(false);
  };

  const open2down = () => {
    set2IsOpen(true);
  };
  const close2down = () => {
    set2IsOpen(false);
  };

  const open3down = () => {
    set3IsOpen(true);
  };
  const close3down = () => {
    set3IsOpen(false);
  };



  
  return (
    <div className='projects_container'>
        <h1 className="projects_title">Projects</h1>
        <span className="section_subtitle">What i have done</span>
        <div className="services_container container grid">
          <div className="services_content">
            <div className='project_video_box'>
            <img className='project_video' src={spaceshooter} alt='It is a demo video.'/>
            </div>
          <div className="services_subcontent">
                <div className='project_content_title'>
                <i className="uil uil-rocket services_icon"></i>
                <h3 className="services_title">Space Shooter</h3>
            </div>
              <span className="button button--flex button--small button--link services_button" onClick={open1down}>
                  View More
                  <i className="uil uil-arrow-right button_icon"></i>
              </span>
              {is1Open && <Services title="Space Shooter" website="https://github.com/zengchai/Space-Shooter" destitle="C++" desc1="Only 3 lives per game" desc2="Survive as long as you can"
              desc3="Avoid clashing with enemy spaceship" desc4="Shoot bullet to destroy the enemy spaceship" onClick={close1down}/>
          }</div>
          </div>
          <div className="services_content">
            <div className='project_video_box'>
            <img className='project_video' src={portfolio} alt='It is a demo video.'/>
            </div>
          <div className="services_subcontent">
                <div className='project_content_title'>
                <i className="uil uil-folder services_icon"></i>
                <h3 className="services_title">Portfolio Website</h3>
                
            </div>
              <span className="button button--flex button--small button--link services_button" onClick={open2down}>
                  View More
                  <i className="uil uil-arrow-right button_icon"></i>
              </span>
              {is2Open && 
              <Services title="Portfolio Website" website="https://github.com/zengchai/Portfolio-Website" destitle="HTML, CSS, JavaScript" desc1="Introduction of myself" desc2="Skills that I learnedn"
              desc3="Qualifications of education and work" desc4="Projects that I made" onClick={close2down}/>
              }
          </div>
          </div>
          <div className="services_content">
            <div className='project_video_box'>
              <img className='project_video' src={forestry} alt='It is a demo video.'/>
              </div>
            <div className="services_subcontent">
              <div className='project_content_title'>
                <i className="uil uil-trees services_icon"></i>
                <h3 className="services_title">Forestry Adventure</h3>
            </div>
              <span className="button button--flex button--small button--link services_button" onClick={open3down}>
                  View More
                  <i className="uil uil-arrow-right button_icon"></i>
              </span>
              {is3Open &&
              <Services title="Forestry Adventure" website="https://github.com/zengchai/Forestry" destitle="GDscript" desc1="2D adventure RPG game" desc2="User can control a character"
              desc3="Some special skills and monster" desc4="Can be play on website" onClick={close3down}/>}
          </div>
          </div>
        </div>
    </div>
  )
}

export default Projects
