import React from "react";
import "./certifications.scss";

export default function Certifications() {
  return (
    <div className="certifications" id="certifications">
      <h1>Certifications</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img
              className="certificateicon"
              src="portfolio-site/assets/certificate.png"
              alt="certificate"
            />
          </div>
          <div className="center">
            <p>
              Learn about React js Framework library, advanced Javascript, React
              hooks, Styling Library and React Redux: actions, Reducers and
              Store.
            </p>
          </div>
          <div className="bottom">
            <h3>Advance Front-End Web Development with React</h3>
            <h4>by Coding Ninjas</h4>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <img
              className="certificateicon"
              src="portfolio-site/assets/certificate.png"
              alt="certificate"
            />
          </div>
          <div className="center">
            <p>
              Learn Basics of HTML 5, Styling with CSS modules, Flex, Responsive
              Designs, Animation and 3D Space. Bootstrap library, Javascript
              Functions, Git, jQuery, Ajax and Promises.
            </p>
          </div>
          <div className="bottom">
            <h3>Front End | Full Stack Web Development</h3>
            <h4>by Coding Ninjas</h4>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <img
              className="certificateicon"
              src="portfolio-site/assets/certificate.png"
              alt="certificate"
            />
          </div>
          <div className="center">
            <p>
              Learn Basics of Python Language, Recursion, OOPS, Linked List,
              Stacks, Queues, Binary Trees, BST and Generic Trees.
            </p>
          </div>
          <div className="bottom">
            <h3>Data Structures and Algorithms in Python</h3>
            <h4>by Coding Ninjas</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
