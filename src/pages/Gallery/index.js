import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Media_Data } from "../../data/constant";
import useDocTitle from "../../hooks/useDocTitle";
import VideoPopupPlayer from "../../components/Video_Player/VideoPopupPlayer";
import Popup from "../../components/Video_Player/Popup";
import styles from "./style.module.css";

const Gallery = () => {
  useDocTitle("Gallery");
  const videos_data = Media_Data.filter((item) => item.type === "video");
  const images_data = Media_Data.filter((item) => item.type === "image");

  const [items, setItems] = useState([]);
  const [slice, setSlice] = useState(8);
  const [file, setFile] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = (file) => {
    setPopupVisible(true);
    setFile(file);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  // functionality for load more data
  useEffect(() => {
    setItems(images_data.slice(0, slice));
  }, [Media_Data]);

  const loadMoreData = () => {
    setSlice(slice + 8);
    setTimeout(() => {
      setItems([...items, ...nextSlice()]);
    }, 200);
  };

  const nextSlice = () => {
    return images_data.slice(slice, slice + 8);
  };

  return (
    <>
      {/* videos gallery slider */}
      <section>
        <Container maxWidth="lg">
          <div className={styles.videos_container}>
            <Typography
              color={"text.tertiary"}
              fontSize={"1.5rem"}
              fontWeight={500}
              lineHeight={"185%"}
              mb={1}
            >
              Videos
            </Typography>

            <VideoPopupPlayer data={videos_data} />
          </div>
        </Container>
      </section>

      {/* images gallery */}
      <section className="section">
        <Container maxWidth="lg">
          <div className={styles.imgGallery_container}>
            <Typography
              color={"text.tertiary"}
              fontSize={"1.5rem"}
              fontWeight={500}
              lineHeight={"185%"}
              mb={2}
            >
              Photos
            </Typography>

            <div className={styles.img_gallery}>
              <div className={`section ${styles.images}`}>
                {items.map((file) =>
                  file.url ? (
                    <span key={file.id}>
                      <img
                        src={file.url}
                        alt=""
                        onClick={() => openPopup(file)}
                      />
                    </span>
                  ) : null
                )}
              </div>

              {slice < images_data.length ? (
                <div className={styles.load_moreBtn}>
                  <button onClick={loadMoreData}>
                    <Typography variant={"subtitle1"} color={"text.secondary"}>
                      Load More
                    </Typography>
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          {/* ***** onClick open image popup modal ***** */}
          {/* <Modal
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
                  {file.url && <img src={file.url} key={file.id} width={500} />}
                </div>
              </Box>
            </Fade>
          </Modal> */}

          {popupVisible && (
            <Popup closePopup={closePopup} imageURL={file.url && file.url} />
          )}
        </Container>
      </section>
    </>
  );
};

export default Gallery;
