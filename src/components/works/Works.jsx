import React, {Fragment} from 'react'
import {Timeline, Event} from "react-timeline-scribble";
import "./works.scss";

export default function Works() {
  return (
    <div className='works' id="works">
      <div className="component">
        <h1>Experience</h1>
        <Fragment>
          <Timeline>
            <Event interval={"Sep. 2022 – Dec. 2022"} title={"Fullstack Software Engineer"} subtitle={"Nova (formerly Polar)"}>
              Incoming for Fall term!
            </Event>
            <Event interval={"Jan. 2022 – Apr. 2022"} title={"Data Analyst"} subtitle={"Royal Bank of Canada"}>
              Enterprise &amp; International Applications, Planning &amp; Tech Initiatives<br />
              - Exploratory contract pricing models for app development. <br />
              - Milestone dashboard automation and reduction. <br />
              - Risk &amp; Governance dashboards on application portfolio.
            </Event>
          </Timeline>
        </Fragment>
      </div>
    </div>
  )
}
