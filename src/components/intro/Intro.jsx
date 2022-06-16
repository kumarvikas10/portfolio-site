import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current , {
      showCursor: true,
      backSpeed:60,
      backDelay:1500,
      strings: ['Developer','Designer'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imagecontainer">
          <img src="portfolio-site/assets/profile.png" alt="profile-pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Vikas Kumar Verma</h1>
          <h3>
            Frontend <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="portfolio-site/assets/down.png" alt="downarrow" />
        </a>
      </div>
    </div>
  );
}
