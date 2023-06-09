import React from "react";
import PropTypes from "prop-types";

const descriptionStyle = {
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  textAlign: "center",
  color: "#FFFFFF",
  width: "90%",
  margin: "0 auto",
  paddingTop: ".5em",
};

const titleStyle = {
  fontFamily: "Roboto",
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "1.2rem",
  letterSpacing: "0.08em",
  textAlign: "center",
  color: "#FFFFFF",
  marginBottom: ".3rem",
};

const ProjectCard = ({ imgSrc, title, description }) => (
  <div
    style={{
      width: "95%",
      maxWidth: "24em",
      margin: "0 auto",
      padding: "0",
      minWidth: "14em",
    }}
  >
    <img
      src={imgSrc}
      alt={title}
      style={{
        width: "100%",
        borderRadius: "16px",
        border: "0.5px solid #000000",
        filter: "drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.7))",
        marginBottom: "1rem",
        objectFit: "cover",
        aspectRatio: 1 / 1,
      }}
    />
    <h2 style={titleStyle}>{title}</h2>
    <p style={descriptionStyle}>{description}</p>
  </div>
);

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
