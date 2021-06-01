import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/arkadipta-mojumder-37580a1ba/" target="__blank">
          Arkadipta Mojumder
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/arkaxox/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/arkadipta-mojumder-37580a1ba/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/arkaslittlemind" target="__blank">
          <i className="fab fa-github fa-2x"></i> 
          </a>
      </div>
    </div>
  );
};

export default Footer;