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
            <a href="/" className="nav_logo">
              {" "}
              <i className="bx bx-dollar nav_logo-icon"></i>{" "}
              <span className="nav_logo-name">Currency Manager</span>{" "}
            </a>
            <div className="nav_list">
              {" "}
              <a href="/" className="nav_link active">
                {" "}
                <i className="bx bx-grid-alt nav_icon"></i>{" "}
                <span className="nav_name">Dashboard</span>{" "}
              </a>{" "}
              <a href="/" className="nav_link">
                {" "}
                <i className="bx bx-user nav_icon"></i>{" "}
                <span className="nav_name">Users</span>{" "}
              </a>{" "}
              <a href="/" className="nav_link">
                {" "}
                <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                <span className="nav_name">Messages</span>{" "}
              </a>{" "}
              <a href="/" className="nav_link">
                {" "}
                <i className="bx bx-bookmark nav_icon"></i>{" "}
                <span className="nav_name">Bookmark</span>{" "}
              </a>{" "}
              <a href="/" className="nav_link">
                {" "}
                <i className="bx bx-folder nav_icon"></i>{" "}
                <span className="nav_name">Files</span>{" "}
              </a>{" "}
              <a href="/" className="nav_link">
                {" "}
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                <span className="nav_name">Stats</span>{" "}
              </a>{" "}
            </div>
          </div>{" "}
          <a href="/" className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">SignOut</span>{" "}
          </a>
        </nav>
      </div>
    </Aux>
  );
};

export default Side;
