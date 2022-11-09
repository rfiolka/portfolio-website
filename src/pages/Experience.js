import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date="2015-2018"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Liceum Ogólnokształcące im. Henryka Sienkiewicza w Nowej Rudzie</h3>
        <p> High School Diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date="2018-2022"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}
      >
        <h3 className='vertical-timeline-element-title'>Wroclaw University of Applied Informatics "Horizon"</h3>
        <h4 className='vertical-timeline-element-subtitle' >
        Bachelor's Degree
        </h4>
        <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date="2018-2022"
        iconStyle={{background: "#e9d35b", color: "#fff"}}
        icon={<WorkIcon />}
      >
        <h3 className='vertical-timeline-element-title'>IT Consultant / IT Specialist - C4IT</h3>
        <h4 className='vertical-timeline-element-subtitle' > 
        Wrocław, Poland
        </h4>
        <p> Provided level 2 support for ERP software. Maintained contact with customers. Provided advice, remote assistance with problems
arising during use of application. Created document forms using C#, HTML and CSS. </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        
    </div>
  )
}

export default Experience