import React, { useState } from "react";
import "./projects.scss";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./portfolio-site/assets/eshop.png",
      title: "Ecommerce Shop",
      desc:
        "E-shop (Ecommerce App) is built by the help of React Redux. By using Json Server creating ecommerce api service and after that to get the data from api service making an api calls. Cereate multiple functionality",
      link:"https://kumarvikas10.github.io/eshop/",
    },
    {
      id: "2",
      icon: "./portfolio-site/assets/socialmedia.png",
      title: "Social Media App",
      desc:
        "In this Project, Making API Calls to fetch user, posts, friends and other properties of social media app like comments and likes. Using react hooks and firebase to create a social networking site CONNECT which will basically have the features of login, signup, post creation, and deletion, like, comment, chat etc.",
      link:"https://kumarvikas10.github.io/connect-app/",
    },
    {
      id: "3",
      icon: "./portfolio-site/assets/moviesearch.png",
      title: "Movie Search App",
      desc:
        "IDMB Movie Search App is clone version App where you can search your favourite movie and also add movie to your favourite list. It will take data from ODMB API Server. this project is built by HTML, CSS and JavaScript only.",
      link:"https://kumarvikas10.github.io/IMDB_MOVIE_APP/",
    },{
      id: "4",
      icon: "./portfolio-site/assets/blog.png",
      title: "Blog App",
      desc:
        "Blog App Project build with the help of React Js and Database (Firebase). Google Firebase data can easily fetch, update and delete from the collections of documents. It is simple blog app which can use to store the daily routine blog, tech blog or many of things.",
      link:"https://kumarvikas10.github.io/blog-app/",
    },{
      id: "5",
      icon: "./portfolio-site/assets/ipod.png",
      title: "Ipod App",
      desc:
        "Ipod App project is based on a digital Apple iPod Version. In this project, we contain a single screen which changes with the help of active classes and props feature to set the screen. To use Apple Ipod like controls we use zingtouch direction library to build round controls.",
      link:"https://kumarvikas10.github.io/ipod-app/",
    },
  ];

  const handleClick = (way) =>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
  }
  return (
    <div className="projects" id="projects">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map ((item)=>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imagecontainer">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>
                  {item.desc}
                </p>
                <span><a href={item.link} target="_blank" rel="noopener noreferrer">Project Link</a></span>
              </div>
            </div>
            <div className="right">
              <img src="portfolio-site/assets/project.png" alt="project" />
            </div>
          </div>
        </div>
        ))
        }
      </div>
      <img src="portfolio-site/assets/arrow.png" className="arrow left" alt="sidearrow" onClick={()=> handleClick("left")}/>
      <img src="portfolio-site/assets/arrow.png" className="arrow right" alt="sidearrow" onClick={()=> handleClick("right")}/>
    </div>
  );
}
