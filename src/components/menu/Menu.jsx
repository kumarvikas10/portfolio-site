import React from 'react';
import './menu.scss';

export default function Menu({menu, setMenu}) {
  return (
    <div className={"menu " + (menu && "active")}>
        <ul>
            <li onClick={()=>setMenu(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenu(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenu(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setMenu(false)}>
                <a href="#certifications">Certifications</a>
            </li>
            <li onClick={()=>setMenu(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
