import React, { useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import nextArrow from "../../assets/icons/next.svg";
import prevArrow from "../../assets/icons/prev.svg";
import { ReactComponent as RightUpArrow } from "../../assets/icons/right_up_arrow.svg";
import play_Icon from "../../assets/icons/play.svg";
import Popup from "./Popup";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";

const VideoPopupPlayer = ({ data }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [videoURL, setVideoURL] = useState();

  const openPopup = (url) => {
    setPopupVisible(true);
    setVideoURL(url);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  // function for get youtube video id for thumbnail-img
  function getVideoId(video_url) {
    // Regular expression to match video ID in query parameter
    const regex =
      /(?:\?v=|&v=|\/videos\/|\/embed\/|\/watch\?v=|^v=)([a-zA-Z0-9_-]{11})/;
    const match = video_url.match(regex);
    // Return the captured video ID
    return match ? match[1] : null;
  }

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
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "card-slider",
    dotsClass: `slick-dots dots`,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
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
        {data.map(({ id, url, title }) => (
          <div key={id} className={styles.VideoCard}>
            <div className={styles.videoBox}>
              <img
                src={`https://i.ytimg.com/vi/${getVideoId(url)}/hqdefault.jpg`}
                alt=""
                className={styles.poster_img}
              />

              <span>
                <img
                  src={play_Icon}
                  alt=""
                  className={styles.playIcon}
                  onClick={() => openPopup(url)}
                />
              </span>
            </div>
            <div className={styles.textBox}>
              <Typography variant="subtitle2" color={"text.tertiary"}>
                {title}
              </Typography>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <RightUpArrow fill="#ACBD33" />
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {popupVisible && (
        <Popup closePopup={closePopup} videoURL={videoURL} />
      )}
    </>
  );
};

export default VideoPopupPlayer;
