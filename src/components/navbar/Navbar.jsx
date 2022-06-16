import React from "react";
import "./Navbar.scss";
import { Person, Mail} from "@mui/icons-material";

export default function Navbar({menu, setMenu}) {
  return (
    <div className={"Navbar " + (menu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio
          </a>
          <div className="itemcontainer">
            <Person className="icon" />
            <span>+91 8527613659</span>
          </div>
          <div className="itemcontainer">
            <Mail className="icon" />
            <span>vkvikaskumar413@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenu(!menu)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
