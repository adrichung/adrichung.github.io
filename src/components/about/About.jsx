import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
        <div className="left">
            <div className="content">
                <h1>About Me</h1>
                <p> 
                    Nice to meet you, I'm Adrian! I'm currently studying Computer Science at the University of Waterloo
                    with a double specialisation in business and human-computer interaction, 
                    along with a minor in economics. I am pursuing a career in product management or software engineering.
                </p>
                <p>
                    I'm passionate about using technology to enable great experiences that can only be delivered through software. 
                </p>
                <p> 
                    I've previously worked at RBC and Nova. I'm currently with the Telus Digital Support Team. 
                    I'm open to summer 2023 product, data, and software roles!
                </p>
                <div className="optional">
                    <p>
                        In my free time, I love going to the gym, running, building keyboards, and watching anime. Check out my Medium blog,
                        where I'll be documenting my experiences in work, school, and life!
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
