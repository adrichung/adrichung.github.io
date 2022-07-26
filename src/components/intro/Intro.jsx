import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Computer Science", "Data Science", "Business", "Human Computer Interaction", "Economics"],
      backDelay: 2000,
      backSpeed: 60,
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Adrian Chung</h1>
          <h3>
            I'm studying <span ref={textRef}></span>
          </h3>
          
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
