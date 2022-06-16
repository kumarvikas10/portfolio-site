import React from "react";
import "./contact.scss";
import { useState } from "react";
import { GitHub , LinkedIn, Twitter} from "@mui/icons-material";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="portfolio-site/assets/shake.svg" alt="contact" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message ? (
            <span>Thanks for contacting, I'will reply ASAP</span>
          ) : null}
        </form>
        <div className="icons">
          <div >
            <a href="https://www.linkedin.com/in/vikas-kumar-verma-00a215218/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="icon" />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/kumarvikas10" target="_blank" rel="noopener noreferrer">
              <GitHub className="icon" />
            </a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/vkvikas_kumar" target="_blank" rel="noopener noreferrer">
              <Twitter className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
