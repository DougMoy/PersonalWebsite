import React from "react";
import "./projectLeftContainer.css";
import PropTypes from "prop-types";

const ProjectLeft = ({ video, title, description }) => {
  const isYouTubeLink = video.includes("youtube.com");
  return (
    <div className="project-container-left">
      <div className="info-container-left">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="video-container-left">
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
    </div>
  );
};

ProjectLeft.propTypes = {
  video: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectLeft;
