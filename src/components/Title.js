import React from "react";
import "./Title.css";
function Title({ title }) {
  return (
    <div className="title__container">
      <h1 className="title__text">{title}</h1>
      <div className="title__underline"></div>
    </div>
  );
}

export default Title;
