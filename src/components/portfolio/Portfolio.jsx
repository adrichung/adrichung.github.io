import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {featuredPortfolio, webPortfolio, applicationPortfolio, designPortfolio, productPortfolio} from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {id: "featured", title: "Featured",},
    {id: "application", title: "Applications",},
    {id: "web", title: "Web",},
    {id: "design", title: "Design",},
    {id: "product", title: "Product",},
  ];

  useEffect(() => {
    switch(selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "application":
        setData(applicationPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "product":
        setData(productPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected])
  return (
    <div className="portfolio" id = "portfolio">
      <h1>
        Portfolio
      </h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected = {setSelected}
            id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
