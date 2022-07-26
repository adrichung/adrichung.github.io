import {useState} from "react";
import "./experience.scss"

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Data Analyst - RBC",
      desc:
      "E&IA, P&TI",
      img: "/assets/rbc.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Park Services Supervisor - Canada's Wonderland",
      desc:
      "Medieval Faire",
      img: "/assets/rbc.png",
    },
  ]

  const handleClick = (way) => {
    way === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) 
      : setCurrentSlide(currentSlide < (data.length - 1) ? currentSlide + 1 : 0)

  }
  return (
    <div className="experience" id="experience">
      <div 
        className="slider" 
        style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d=>( 
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src= {d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
