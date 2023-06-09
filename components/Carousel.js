import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import Head from "next/head";

function Carousel({ projects }) {
  const titleStyle = {
    fontFamily: "Roboto",
    fontWeight: 600,
    paddingTop: "3em",
    paddingBottom: "2em",
    fontSize: "2rem",
    lineHeight: "1.2rem",
    letterSpacing: "0.08em",
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: ".3rem",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    touchThreshold: 10,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "10%",
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "-10%",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "7.5%",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "3%",
        },
      },
    ],
  };

  return (
    <div>
      <h2 style={titleStyle}> Past Work & Projects </h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
