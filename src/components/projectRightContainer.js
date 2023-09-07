import React from "react";
import "./projectRightContainer.css";
import PropTypes from "prop-types";

const ProjectRight = ({ video, title, description }) => {
  const isYouTubeLink = video.includes("youtube.com");

  return (
    <div className="project-container">
      <div className="video-container">
        {isYouTubeLink ? (
          <iframe
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
