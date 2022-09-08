import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
        <div className="left">
            <div className="content">
                <h1>About Me</h1>
                <p> 
                    Hi, I'm Adrian! I'm currently studying Computer Science at the University of Waterloo. 
                    Currently in my second-year, I'm planning to do business and human-computer interaction 
                    specializations and an economics minor. 
                </p>
                <p>
                    My goal is to leverage my understanding of product ideation, software development, and data 
                    analysis to enable businesses and individuals, while providing unique experiences.
                </p>
                <p> 
                    I've previously worked at RBC as a data analyst, helping to price new software contracts, enable 
                    delivery of milestones, and deploy dashboards for projects across the organisation. In fall, I'll be
                    working at Nova (formerly Polar). Currently open to Winter 2023 product, data, and software roles!
                </p>
                <p>
                    In my free time, I love going to the gym, running, and overanalysing anime. 
                    I also love to work on keyboards!
                    
                </p>
                <p>
                    My plan for this website is to be a collection of things I've done. Work experience, projects,
                    blogs, photos, etc. Work in progress, made using React and Material UI. Not yet optimised for mobile,
                    desktop only.
                </p>
            </div>
        </div>
        <div className="right">
            <img src="/assets/profile.jpg" alt =""/>
        </div>
    </div>
  )
}
