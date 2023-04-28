import React from 'react';
import '../Explain/explain.css';

const Explain = ({number,text}) => {
  return (
    <div>
    { number.length === 1 &&
    <li className="services_modal-servicel ">
        <i className="uil uil-arrow services_modal-iconl"></i>
        <p>{text}</p>
    </li>}
    { number.length === 2 &&
    <li className="services_modal-service">
    <i className="uil uil-check-circle services_modal-icon"></i>
    <p>{text}</p>
</li>}
  </div>
  )
}

export default Explain
