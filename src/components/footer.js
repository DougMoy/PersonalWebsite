import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineFile,
} from "react-icons/ai";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  // Replace these URLs with your actual links
  const githubLink = "https://github.com/DougMoy";
  const linkedinLink = "https://www.linkedin.com/in/douglas-moy";
  const emailLink = "mailto:dougmoy@bu.edu";
  const resumeLink = "/path/to/your/resume.pdf";

  return (
    <footer className="footer">
      <div className="icon-container">
        <a href={emailLink} data-tooltip="Gmail" data-tooltip-location="top">
          <AiOutlineMail className="icon" />
        </a>
        <a
          href={githubLink}
          data-tooltip="GitHub"
          data-tooltip-location="top"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="icon" />
        </a>
        <a
          href={linkedinLink}
          data-tooltip="LinkedIn"
          data-tooltip-location="top"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="icon" />
        </a>

        <a
          href={resumeLink}
          data-tooltip="Resume"
          data-tooltip-location="top"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFile className="icon" />
        </a>
      </div>
      <p className="footerText"> Last Updated on 8/30/23</p>
      <p className="footerText"> Created by Douglas Moy</p>
    </footer>
  );
};

export default Footer;
