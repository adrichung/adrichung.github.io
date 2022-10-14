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
            date="09/2022 - 12/2022"
            dateClassName = ""
            iconStyle={{ background: "#344955", color: '#fff' }}
            icon={<Code />}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, Canada</h4>
            <p>
              Intelligence Pod
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#344955', color: 'white' }}
            contentArrowStyle={{ borderRight: '3px solid  #344955' }}
            date="01/2022 - 04/2022"
            iconStyle={{ background: "#344955", color: '#fff' }}
            icon={<Code />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
            <p>
              Enteprise &amp; International Applications
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#344955', color: 'white' }}
            contentArrowStyle={{ borderRight: '3px solid  #344955' }}
            date="09/2021 - 10/2021"
            iconStyle={{ background: "#344955", color: '#fff' }}
            icon={<Code />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Cambridge, ON</h4>
            <p>
              Contract
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}
