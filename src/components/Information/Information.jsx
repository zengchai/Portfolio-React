import React from 'react'
import '../Information/information.css'

const Information = ({title,subtitle,icon}) => {
  return (
    <div className="contact_information">
        <i className={icon}></i>
        { title === "Email" &&
        <div>
            <h3 className="contact_title">{title}</h3>
            <span className="contact_subtitle"><a href="mailto:tanzenchai0923@gmail.com" id="email">
                                {subtitle}
            </a></span></div>}
        { title.length !== 5 &&
        <div>
            <h3 className="contact_title">{title}</h3>
            <span className="contact_subtitle">{subtitle}</span>
        </div>}
    </div>
  )
}

export default Information
