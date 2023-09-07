import React from "react";
import PropTypes from "prop-types";
import "./section.css";

const Section = ({ id, pageComponent: PageComponent, ref }) => {
  return (
    <section id={id} ref={ref}>
      <PageComponent />
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  pageComponent: PropTypes.element.isRequired,
  ref: PropTypes.object,
};

export default Section;
