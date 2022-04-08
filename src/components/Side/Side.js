import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Aux from "../../hoc/Aux";
import "./side.css";

function handleNavigation() {
    
      document.getElementById("nav-bar").classList.toggle("show");
      document.getElementById("header-toggler").classList.toggle("bx-x");
      document.getElementById("body-pd").classList.toggle("body-pd");
      document.getElementById("header").classList.toggle("body-pd");
      const linkColor = document.querySelectorAll(".nav_link");
      function colorLink() {
        if (linkColor) {
          linkColor.forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
        }
      }
      linkColor.forEach((l) => l.addEventListener("click", colorLink));
}

function Side (props) {

  return (
    <Aux>
      <header className="header" id="header">
        <div className="header_toggle">
          {" "}
          <i className="bx bx-menu" id="header-toggler" onClick={handleNavigation}></i>{" "}
        </div>
      </header>
      <div className="l-navbar bg-primary bg-gradient" id="nav-bar">
        <nav className="nav">
          <div>
            {" "}
            <a href="/" className="nav_logo ">
              {" "}
              <i className="bx bx-dollar nav_logo-icon"></i>{" "}
              <span className="nav_logo-name">Currency Manager</span>{" "}
            </a>
            <div className="nav_list">
              {" "}
              <a href="https://github.com/captcha781" className="nav_link">
                {" "}
                <i className="fa-brands fa-github nav_icon"></i>{" "}
                <span className="nav_name">Github</span>{" "}
              </a>{" "}
              <a href="https://www.linkedin.com/in/bhuvaneshwaran-s-5930911a5" className="nav_link">
                {" "}
                <i className="fa-brands fa-linkedin nav_icon"></i>{" "}
                <span className="nav_name">LinkedIn</span>{" "}
              </a>{" "}
              <a href="https://twitter.com/iamrealbhuvi" className="nav_link ">
                {" "}
                <i className="fa-brands fa-twitter nav_icon"></i>{" "}
                <span className="nav_name">Twitter</span>{" "}
              </a>{" "}
              <a href="mailto:bhuvanesh19112001@gmail.com" className="nav_link ">
                {" "}
                <i className="fa-solid fa-envelope nav_icon"></i>{" "}
                <span className="nav_name">Mail Me</span>{" "}
              </a>{" "}
              <a href="https://instagram.com/iamrealbhuvi" className="nav_link ">
                {" "}
                <i className="fa-brands fa-instagram nav_icon"></i>{" "}
                <span className="nav_name">Instagram</span>{" "}
              </a>{" "}
              
            </div>
          </div>{" "}
          {/* <a href="/" className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">SignOut</span>{" "}
          </a> */}
        </nav>
      </div>
    </Aux>
  );
};

export default Side;
