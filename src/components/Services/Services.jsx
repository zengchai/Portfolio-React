import React from 'react';
import Explain from '../Explain/Explain';
import '../Services/services.css';

const Services = (props) => {
    
  return (
    <div className="services_modal">
                <div className="services_modal-content">
                    <h4 className="services_modal-title">{props.title}</h4>
                    
                    <i className="uil uil-times services_modal-close" onClick={props.onClick}/>
                    <ul className="services_modal-services grid">
                        <Explain number="t" text={props.destitle}/>
                        <Explain number="fa" text={props.desc1}/>
                        <Explain number="fa" text={props.desc2}/>
                        <Explain number="fa" text={props.desc3}/>
                        <Explain number="fa" text={props.desc4}/>
                        
                            <a href={props.website} className="website" target="_blank" rel="noreferrer"><span className="button-services button--flex btwb button">Go to website</span></a>
                        
                    </ul>
                </div>
            </div>
            
  )
}

export default Services
