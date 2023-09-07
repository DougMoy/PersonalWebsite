import React from "react";
import "./projectLeftContainer.css";
import PropTypes from "prop-types";

const ProjectLeft = ({ video, title, description }) => {
  const isVideo = video.match(/\.(mp4|webm|ogg)$/i) !== null;
  return (
    <div className="project-container-left">
      <div className="info-container-left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="video-container-left">
        {isVideo ? (
          <video src={video} controls />
        ) : (
          <img src={video} alt={title} />
        )}
      </div>
    </div>
  );
};

ProjectLeft.propTypes = {
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectLeft;
