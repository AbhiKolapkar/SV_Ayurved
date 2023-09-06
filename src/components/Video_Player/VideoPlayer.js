import React, { useState } from "react";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import {ReactComponent as RightUpArrow} from '../../assets/icons/right_up_arrow.svg'
import play_Icon from "../../assets/icons/play.svg";
import styles from "./style.module.css";

const mediaModal = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 320, sm: 650 },
  height: "auto",
  borderRadius: "0.875rem",
  overflow: "hidden",
};

const VideoPlayer = ({ id, url, title }) => {
  const [videoURL, setVideoURL] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const videoThumbnail = `https://i.ytimg.com/vi/${getVideoId(
    url
  )}/mqdefault.jpg`;

  // function for get youtube video id for thumbnail-img
  function getVideoId(video_url) {
    // Regular expression to match video ID in query parameter
    const regex =
      /(?:\?v=|&v=|\/videos\/|\/embed\/|\/watch\?v=|^v=)([a-zA-Z0-9_-]{11})/;
    const match = video_url.match(regex);
    // Return the captured video ID
    return match ? match[1] : null;
  }

  return (
    <>
      <div className={styles.video__card}>
        <div key={id} className={styles.VideoCard}>
          <div className={styles.videoBox}>
            <img src={videoThumbnail} alt="" className={styles.poster_img} />

            <span onClick={handleOpen}>
              <img
                src={play_Icon}
                alt=""
                className={styles.playIcon}
                onClick={() => setVideoURL(url)}
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

        {/* ***** onClick open image popup modal ***** */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
          style={{ zIndex: 100 }}
        >
          <Fade in={open}>
            <Box sx={mediaModal}>
              <div className={styles.popup_media}>
                {videoURL && (
                  <iframe
                    src={videoURL}
                    title="YouTube Video"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                )}
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default VideoPlayer;
