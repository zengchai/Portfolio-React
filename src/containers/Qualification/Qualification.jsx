import React, { useState } from 'react'
import Content from '../../components/Content/Content'
import '../Qualification/qualification.css'



const Qualification = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [isClicked, setIsClicked] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(false);
    setIsClicked(false);
  };
  const toggleDropdown2 = () => {
    setIsOpen(true);
    setIsClicked(true);
  }; 

  return (
    <div>
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>
      <div className="qualification_container container">
                    <div className="qualification_tabs">
                        <div className={`qualification_button button--flex ${isClicked ? "clicked":""}`} onClick={toggleDropdown2} >
                            <i className="uil uil-graduation-cap qualification_icon"></i>
                            Education
                        </div>
                        <div className={`qualification_button button--flex work ${isClicked ? "":"clicked"}`} onClick={toggleDropdown}>
                            <i className="uil uil-briefcase-alt qualification_icon"></i>
                            Work     
                        </div>
                    </div>
                      {isOpen === true ? (
                        <div className="qualification_content qualification_active" id="education">
                        <Content boolean="t" title="Methodist Telok Datok High School" stitle="0" subtitle="SPM: 1A+ 3A 3A- 3B+" date=" 2014 - 2019 " last="0"/>
                        <Content boolean="fa" title="Negeri Sembilan Matriculation College" stitle="0" subtitle="CGPA: 4.0 MUET: Band 5" date=" 2020 - 2021 " last="0"/>
                        <Content boolean="t" title="University Of Technology Malaysia" stitle="0" subtitle="Current CGPA: 3.99" date=" 2021 - 2025 " last="012345"/>
                        </div>):(
                        <div className="qualification_content" id="work">
                        <Content boolean="t" title="Asia Fibre Solutions &#124; Malaysia" stitle="Telemarketer (Petaling Jaya)" subtitle="Generate sales via phone texts and calls. Apply with the correct details and
                                        required documents. Process all sales into the sales portal. Able to generate at
                                        least two sales per day." date=" 2020 Jan - 2020 Mar " last="0"/>
                        <Content boolean="fa" title="TcherOnline &#124; Singapore" stitle="Sales cum Admin (Remote)" subtitle="Deal with the parents about their child's problems and promote the plans via
                                        phone texts and calls. Update all the sales in a channel and record them in the file.
                                        Upload the new schedules for the teacher. Always be online to solve any
                                        problems that may exist." date=" 2021 Jun - 2021 Oct " last="0"/>  
                        <Content boolean="f" title="KidoCode &#124; Malaysia" stitle="Game Development Intern (Kuala Lumpur)" subtitle="Help the students to solve the bug and some logical code questions. Working 
                                        on the project (a portfolio website and a game) assigned by the supervisor. Organize 
                                        a workshop about how to create a game using Godot." date=" 2022 Jul - 2022 Oct " last="012345"/>  
                        </div>)}
    </div>
    </div>
  )
}

export default Qualification
