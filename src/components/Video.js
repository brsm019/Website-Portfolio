import React from "react";
import "./Video.css";
function Video({ video, description, link }) {
  return (
    <div className="video">
      <div className="video__container">
        <video className="video__video" controls autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <p className="video__description">{description}</p>
      <a className="video__link" href={link}>
        VIEW SOURCE CODE
      </a>
    </div>
  );
}

export default Video;
