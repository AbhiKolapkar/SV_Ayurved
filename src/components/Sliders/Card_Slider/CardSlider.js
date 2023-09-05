import React from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import nextArrow from "../../../assets/icons/next.svg";
import prevArrow from "../../../assets/icons/prev.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const CardSlider = ({ cardData, Component, slides }) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={nextArrow} alt="" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={prevArrow} alt="" />
      </div>
    );
  };

  const SliderSettings = {
    slidesToShow: slides,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // speed: 800,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "card-slider",
    dotsClass: `slick-dots dots`,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: slides - 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...SliderSettings}>
        {Component
          ? cardData.map(
              ({
                id,
                image,
                title,
                desc,
                userName,
                profession,
                reviewText,
                url,
                starCount,
              }) => (
                <Component
                  key={id}
                  image={image}
                  title={title}
                  desc={desc}
                  userName={userName}
                  profession={profession}
                  reviewText={reviewText}
                  url={url}
                  starCount={starCount}
                />
              )
            )
          : cardData.map(({ id, img, name, designation }) => (
              <div className="member-card" key={id}>
                <div className="imgBox">
                  <img src={img} alt="" loading="lazy" />
                </div>
                <div className="member-info" style={{ textAlign: "center" }}>
                  <Typography variant="h5" color={"text.secondary"}>
                    {name}
                  </Typography>
                  <Typography variant="body1" color={"text.secondary"}>
                    {designation}
                  </Typography>
                </div>
              </div>
            ))}
      </Slider>
    </>
  );
};

export default CardSlider;
