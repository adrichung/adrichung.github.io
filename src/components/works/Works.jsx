import React from 'react'
import "./works.scss";
import "../../global.scss";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Code} from "@material-ui/icons";


export default function Works() {
  return (
    <div className='works' id="works">
      <div className="component">
        <h1>Experience</h1>
        <VerticalTimeline lineColor = "#344955">
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#344955', color: 'white' }}
            contentArrowStyle={{ borderRight: '3px solid  red' }}
            date=""
            dateClassName = ""
            iconStyle={{ background: "#344955", color: '#fff' }}
            icon={<Code />}
          >
            <h3 className="vertical-timeline-element-title">Analytics Co-op</h3>
            <p>TELUS Digital, Support</p>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#344955', color: 'white' }}
            contentArrowStyle={{ borderRight: '3px solid  red' }}
            date=""
            dateClassName = ""
            iconStyle={{ background: "#344955", color: '#fff' }}
            icon={<Code />}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack Software Engineer</h3>
            <p>
              Nova, Intelligence Pod
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#344955', color: 'white' }}
            contentArrowStyle={{ borderRight: '3px solid  #344955' }}
            date=""
            iconStyle={{ background: "#344955", color: '#fff' }}
            icon={<Code />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <p>
              RBC, Enteprise &amp; International Applications
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
