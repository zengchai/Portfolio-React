import React, { useEffect } from 'react'
import homeimage from "../../img/me2.png";

const Intro = () => {


    useEffect(() => {
        // Get the hash from the URL
        const hash = window.location.hash;
        if (hash) {
            window.scrollTo(0, 0);
            window.history.replaceState(null, null, ' ');
            // If hash is present, scroll to the corresponding section after page load
        } 
    }, []);


  return (
    <div>
      <div className="container grid">
            <div className="home_content grid">
                <div className="home_social">
                    <a href="https://www.linkedin.com/in/zeng-chai-tan-a969341a9" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/zengchai" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                        <i className="uil uil-github-alt"></i>
                </a>
                </div>
                <div className="home_img">
                    <svg className="home_blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"> 
                                <mask id="mask0" mask-type="alpha">
                                <path fill="#FF0066" d="M53.4,-28.1C64.1,-12.2,64.3,12.5,53.6,34.2C43,55.9,21.5,74.7,
                                -0.3,74.8C-22,75,-44,56.5,-51.5,36.6C-59.1,16.7,-52.2,-4.7,-41.2,-20.8C-30.2,-36.9,-15.1,
                                -47.6,3.1,-49.4C21.3,-51.2,42.6,-44.1,53.4,-28.1Z" transform="translate(100 100)" />
                                </mask>
                        <g mask="url(#mask0)">
                                    <path d="M53.4,-28.1C64.1,-12.2,64.3,12.5,53.6,34.2C43,55.9,21.5,74.7,
                                -0.3,74.8C-22,75,-44,56.5,-51.5,36.6C-59.1,16.7,-52.2,-4.7,-41.2,-20.8C-30.2,-36.9,-15.1,
                                -47.6,3.1,-49.4C21.3,-51.2,42.6,-44.1,53.4,-28.1Z" transform="translate(100 100)" />
                                <foreignObject width="100%" height="100%">  
                                    <div xmlns="http://www.w3.org/1999/xhtml">
                                        <img className="home_blob-img" src={homeimage} alt="react logo"/>
                                    </div>
                                </foreignObject>
                                {/* react treat svg as diffrent language so we need to use foreignobject
                                to include non-svg element */}
                        </g>
                        {/* g tag is a container used to group other SVG elements. */}
                    </svg>
                    
                </div>
                
                <div className ="home_data">
                    <h1 className="home_title">Hi, I'm Loy</h1>
                    <h3 className="home_subtitle">Second Year Software Engineering Student</h3>
                    <p className="home_description">In order to be irreplaceable, one must always be different</p>
                    <a href="mailto:tanzenchai0923@gmail.com" className="button button--flex">Contact Me
                        <i className="uil uil-message button_icon"></i>
                    </a>
                </div>
            </div>
            <div className="home_scroll">
                <a href="#about" className="home_scroll-button button--flex">
                    <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                    <span className="home_scroll-name">Scroll down</span>
                    <i className="uil uil-arrow-down home_scroll-arrow"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Intro
