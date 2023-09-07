import React from "react";
import "./projectRightContainer.css";
import PropTypes from "prop-types";

const ProjectRight = ({ video, title, description }) => {
  const isVideo = video.match(/\.(mp4|webm|ogg)$/i) !== null;

  return (
    <div className="project-container">
      <div className="video-container">
        {isVideo ? (
          <video src={video} controls />
        ) : (
          <img src={video} alt={title} />
        )}
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
ProjectRight.propTypes = {
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectRight;
