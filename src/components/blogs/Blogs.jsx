import "./blogs.scss"

export default function Blogs() {
  const data = [
    {
      id: 1,
      name: "About Text",
      title: "Title",
      img: "/assets/rbc.png",
      icon: "./assets/mobile.png",
      desc:
      "Description of this.",
    },
    {
      id: 2,
      name: "About Text2",
      title: "Title",
      img: "/assets/rbc.png",
      icon: "./assets/mobile.png",
      desc:
      "Description of this.",
      featured: true,
    },
    {
      id: 3,
      name: "About Text3",
      title: "Title",
      img: "/assets/rbc.png",
      icon: "./assets/mobile.png",
      desc:
      "Description of this.",
    }
  ]
  return (
    <div className="blogs" id="blogs">
        <h1>Testimonials</h1>
        <div className="container">
          {data.map(d=>(
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/arrow.png" className="left" alt="" />
                <img src={d.img} className="user" alt="" />
                <img src={d.icon} className="right" alt="" />
              </div>
              <div className="center">
                {d.desc}
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          ))};
        </div>
    </div>
  )
}
