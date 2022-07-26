import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Experience/>
        <Blogs/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
