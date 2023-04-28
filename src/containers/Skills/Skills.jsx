import React, { useState } from 'react'
import '../Skills/skills.css'

const Skills = () => {
  const isOpen = true;
  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(180);
  const [isDropdown1Visible, setIsDropdown1Visible] = useState(true);
  const [isDropdown2Visible, setIsDropdown2Visible] = useState(false);
  
    const toggleDropdown = () => {
        setIsDropdown2Visible(false);
        setIsDropdown1Visible(!isDropdown1Visible);
      setRotation(rotation + 180);
      if((rotation2/180)%2 === 0){
        setRotation2(rotation2 + 180);
      }
    };

    const toggleDropdown2 = () => {
        setIsDropdown1Visible(false);
        setIsDropdown2Visible(!isDropdown2Visible);
        setRotation2(rotation2 + 180);
        if((rotation/180)%2 === 0){
          setRotation(rotation + 180);
        }
      };
  

  return (
    <div className='skills_section'>
      <h2 className="section_title">Skills</h2>
                <span className="section_subtitle">My Technical Level</span>
                <div className='skill_relative'>
                <div className="skills_container container grid">
                    
                    <div className="skills_content skills_open">
                            <div className="skills_header" onClick={toggleDropdown} >
                                <i className="uil uil-brackets-curly skills_icon"></i>
                                <div>
                                    <h1 className="skills_title">Coding</h1>
                                    <span className="skills_subtitle">More than 1 year</span>
                                </div>
                                <i className="uil uil-angle-down skills_arrow" style={{ transform: `rotate(${rotation}deg)` }}/>
                            </div>
                            {isOpen && <div className="skills_list grid" style={{ opacity: isDropdown1Visible ? 1 : 0, visibility: isDropdown1Visible ? "visible" : "hidden" }}>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">C++</h3>
                                        <span className="skills_number">80%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_c">
                                        </span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">HTML</h3>
                                        <span className="skills_number">50%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_html">
                                        </span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">CSS</h3>
                                        <span className="skills_number">50%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_css">
                                        </span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">JavaScript</h3>
                                        <span className="skills_number">30%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_java">
                                        </span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">ReactJS</h3>
                                        <span className="skills_number">20%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_react">
                                        </span>
                                    </div>
                                </div>
                            </div>}
                        </div>

                    <div className="skills_content skills_open">
                            <div className="skills_header" onClick={toggleDropdown2}>
                                <i className="uil uil-pen skills_icon"></i>
                                <div>
                                    <h1 className="skills_title">Designer</h1>
                                    <span className="skills_subtitle">More than 1 year</span>
                                </div>
                                <i className="uil uil-angle-down skills_arrow" style={{ transform: `rotate(${rotation2}deg)` }}/>
                            </div>
                            {isOpen && <div className="skills_list grid" style={{ opacity: isDropdown2Visible ? 1 : 0, visibility: isDropdown2Visible ? "visible" : "hidden" }}>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Premiere Pro</h3>
                                        <span className="skills_number">20%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_premiere">
                                        </span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Figma</h3>
                                        <span className="skills_number">40%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_figma">
                                        </span>
                                    </div>
                                </div>
                                <div className="skills_data">
                                    <div className="skills_titles">
                                        <h3 className="skills_name">Illustrator</h3>
                                        <span className="skills_number">20%</span>
                                    </div>
                                    <div className="skills_bar">
                                        <span className="skills_percentage skills_illus">
                                        </span>
                                    </div>
                                </div>
                            </div>}
                        </div>

                </div>
                </div>
    </div>
  )
}

export default Skills
