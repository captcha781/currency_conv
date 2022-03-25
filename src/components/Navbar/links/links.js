import React from "react";

const links = (props) => {
  return  (
    <a href={props.link} className="text-light">
      <i className={props.icon}></i>
    </a>
  );
};

export default links;