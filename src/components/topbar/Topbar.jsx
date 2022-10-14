import React from "react";
import "./topbar.scss"
import {Mail, LinkedIn, GitHub, InsertDriveFile} from "@material-ui/icons"
import BookIcon from '@mui/icons-material/Book';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">adrian chung</a>
                <div className="itemContainer">
                    <span>
                        <a href="https://www.linkedin.com/in/adrianthchung/">
                            <LinkedIn className="icon"/>
                        </a>
                    </span>
                </div>
                <div className="itemContainer">
                    <span>
                        <a href="https://github.com/adrichung">
                            <GitHub className="icon"/>
                        </a>
                    </span>
                </div>
                <div className="itemContainer">
                    <span>
                        <a href="adrianthchung@gmail.com">
                            <Mail className="icon"/>
                        </a>
                    </span>
                </div>
                <div className="itemContainer">
                    <span>
                        <a href="assets/resume.pdf">
                            <InsertDriveFile className="icon"/>
                        </a>
                    </span>
                </div>
                <div className="itemContainer">
                    <span>
                        <a href="https://medium.com/@adrianthchung">
                            <BookIcon className="icon"/>
                        </a>
                    </span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
