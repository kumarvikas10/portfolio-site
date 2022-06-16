import React from "react";
import "./portfolio.scss";

export default function Portfolio() {
  const data = [
    {
      img: "./portfolio-site/assets/html5.png",
      name: "HTML 5",
    },
    {
      img: "./portfolio-site/assets/css3.png",
      name: "CSS 3",
    },
    {
      img: "./portfolio-site/assets/javascript1.jpg",
      name: "Javascript",
    },
    {
      img: "./portfolio-site/assets/jquery.png",
      name: "jQuery",
    },
    {
      img: "./portfolio-site/assets/ajax.png",
      name: "Ajax",
    },
    {
      img: "./portfolio-site/assets/bootstrap.png",
      name: "Bootstrap 5",
    },
    {
      img: "./portfolio-site/assets/react.png",
      name: "React js",
    },
    {
      img: "./portfolio-site/assets/git.png",
      name: "Git",
    },
    {
      img: "./portfolio-site/assets/firebase.png",
      name: "Firebase 9.0",
    },
    {
      img: "./portfolio-site/assets/sass.png",
      name: "Sass",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Technical Skills</h1>
      <div className="container">
        {data.map((item)=>(
          <div className="card">
          <div className="imagecontainer">
            <img src={item.img} alt="logo" />
            <h3>{item.name}</h3>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
