import React, { useState } from "react";
import { Container, useMediaQuery } from "@mui/material";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";
import useDocTitle from "../../hooks/useDocTitle";
import play_icon from '../../assets/icons/play.svg'
import "./style.css";

const Updates = () => {
  useDocTitle("Recent Updates");
  const isMobile = useMediaQuery("(max-width:" + 600 + "px)");
  const { updateBanner } = BannerImages_Data;
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  const videos = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dcoj46zib/video/upload/v1694792671/A_1_Lowres_lnat8o.mp4",
      thumbnailUrl:
        "https://res.cloudinary.com/dcoj46zib/video/upload/v1694792671/A_1_Lowres_lnat8o.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dcoj46zib/video/upload/v1694792734/B_1__LOWRES_uzazid.mp4",
      thumbnailUrl:
        "https://res.cloudinary.com/dcoj46zib/video/upload/v1694792734/B_1__LOWRES_uzazid.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dcoj46zib/video/upload/v1694792647/C_1__LOWRES_qyfe4m.mp4",
      thumbnailUrl:
        "https://res.cloudinary.com/dcoj46zib/video/upload/v1694792647/C_1__LOWRES_qyfe4m.jpg",
    },
  ];

  return (
    <>
      <section className="section">
        {!isMobile ? (
          <Container maxWidth="xxl">
            <div className="imgBox">
              <img src={updateBanner} alt="" loading="lazy" />
            </div>
          </Container>
        ) : (
          <div className="imgBox banner">
            <img src={updateBanner} alt="" loading="lazy" />
          </div>
        )}
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title="Mantrachikitsa" />

          <div className="video_wrapper">
            {videos.map((video) => (
              <div key={video.id} className="video-box">
                <div
                  className={`video-thumbnail ${
                    currentVideo && currentVideo.id === video.id ? "active" : ""
                  }`}
                >
                  <img src={video.thumbnailUrl} alt="Video Thumbnail" />
                  <button className="play-button" onClick={() => handleVideoClick(video)}>
                    <img src={play_icon} alt="" />
                  </button>
                </div>
                {currentVideo && currentVideo.id === video.id && (
                  <video controls autoPlay muted>
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title="Recent Updates" />
        </Container>
      </section>
    </>
  );
};

export default Updates;
