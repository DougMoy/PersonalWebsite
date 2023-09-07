import React from "react";
import "./workExperience.css";
import PropTypes from "prop-types";

const WorkExperience = ({
  jobTitle,
  company,
  startDate,
  endDate,
  location,
  description,
}) => {
  return (
    <div className="work-experience-container">
      <p className="dates">
        {startDate} - {endDate || "Present"}
      </p>
      <div className="job-header">
        <h2>{jobTitle}</h2>
      </div>
      <p className="company">{company}</p>
      <p className="location">{location}</p>
      <p className="description">{description}</p>
    </div>
  );
};

WorkExperience.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkExperience;
