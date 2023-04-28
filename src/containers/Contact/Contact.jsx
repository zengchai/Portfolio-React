import React from 'react';
import Information from '../../components/Information/Information';
import '../Contact/contact.css'

const Contact = () => {
  return (
    <div className='contact_box'>
      <h1 className="projects_title">Contact Me</h1>
      <span className="section_subtitle">Get in touch</span>
      <div className="content_box">
      <div className='contact_container container grid'>
        <Information title="Call Me" subtitle="+60 11-2612 6563" icon="uil uil-phone contact_icon"/>
        <Information title="Email" subtitle="tanzenchai0923@gmail.com" icon="uil uil-envelope contact_icon"/>
        <Information title="Location" subtitle="10 Jalan Delima 20" icon="uil uil-map-marker contact_icon"/>
      </div>
      </div>
    </div>
  )
}

export default Contact
