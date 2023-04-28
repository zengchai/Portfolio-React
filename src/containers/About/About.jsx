import React from 'react'
import aboutimg from '../../img/About.jpg'
import '../About/about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id='about' className='aboutid_container'>
        <div className='aboutme_container container'>
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>
            <div className="about_container grid">
                <img src={aboutimg} alt="" className="about_img"/>
                <div className="about_data">
                    <p className="about_description">
                    Currently living in Banting, Selangor, and pursuing a degree in Software Engineering at UTM.
                    </p>
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">01+</span>
                            <span className="about_info-name">Years<br/>experience</span>
                        </div>
                         <div>
                            <span className="about_info-title">02+</span>
                            <span className="about_info-name">Completed<br/>project</span>
                        </div>
                        <div>
                            <span className="about_info-title">03+</span>
                            <span className="about_info-name">Companies<br/>worked</span>
                        </div>
                    </div>
                    <div className="about_buttons">
                    <Link to="/meet_loy.pdf"  className="button button--flex" target="_blank" download>
                        Download CV<i className="uil uil-download-alt button_icon"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
