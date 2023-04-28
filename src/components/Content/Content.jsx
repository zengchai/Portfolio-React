import React from 'react'
import '../Content/content.css'

const Content = ({boolean,title,stitle,subtitle,date,last}) => {
  return (
    <div>
      {boolean.length === 1 &&
      <div className="qualification_data c1">
      <div>
          <h3 className="qualification_title">{title}</h3>
          {stitle.length > 4 &&
          <h3 className="qualification_stitle">{stitle}</h3>}
          <span className="qualification_subtitle">{subtitle}</span>
          <div className="qualification_calender">
              <i className="uil uil-calender"></i>
              {date}
          </div>
      </div>
      <div>
          <span className="qualification_rounder"></span>
          {last.length < 2 &&
          <span className="qualification_line"></span>}
      </div>
    </div>
      }
      {boolean.length === 2 &&
      <div className="qualification_data">
        <div></div>
      <div>
          <span className="qualification_rounder"></span>
          {last.length < 2 &&
          <span className="qualification_line"></span>}
      </div>

      <div>
          <h3 className="qualification_title">{title}</h3>
          {stitle.length > 4 &&
          <h3 className="qualification_stitle">{stitle}</h3>}
          <span className="qualification_subtitle">{subtitle}</span>
          <div className="qualification_calender">
              <i className="uil uil-calender"></i>
              {date}
          </div>
      </div>
  </div>
      }
    </div>
  )
}

export default Content
