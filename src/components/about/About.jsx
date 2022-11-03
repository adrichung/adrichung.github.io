import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
        <div className="left">
            <div className="content">
                <h1>About Me</h1>
                <p> 
                    Hi, I'm Adrian! I'm currently studying Computer Science at the University of Waterloo. 
                    With my degree, I am working towards a double specialisation in business and human-computer interaction, 
                    along with a minor in economics. I am pursuing a career in product development or software engineering.
                </p>
                <p>
                    I'm passionate about using technology to build things from a user-perspective, enabling great 
                    experiences that can only be delivered through software. To these ends, I am always learning 
                    about new tools to get the job done.
                </p>
                <p> 
                    I've previously worked at RBC as a data analyst in Enteprise and International Applications. I'm currently a full-stack
                    developer at Nova on the Intelligence Pod. Currently open to 2023 product, data, and software roles!
                </p>
                <div className="optional">
                    <p>
                        In my free time, I love going to the gym, running, building keyboards, and watching anime. Check out my Medium blog,
                        where I'll be documenting my experiences in work, school, and life! Currently, I'm working on compatability for tablets
                        for this site!
                    </p>
                </div>
            </div>
        </div>
        <div className="right">
            <img src="/assets/profile.jpg" alt =""/>
        </div>
    </div>
  )
}
