import React from "react";
import styles from "./style.module.css";

const Popup = ({ closePopup, videoURL, imageURL }) => {
  return (
    <>
      {videoURL && (
        <div className={styles.popup_overlay}>
          <div className={styles.popup}>
            <div className={styles.close} onClick={closePopup}>
              &#10005;
            </div>
            <div className={styles.popup_media}>
              <iframe
                src={`${videoURL}?autoplay=1&modestbranding=1&showinfo=0`}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {imageURL && (
        <div className={styles.popup_overlay} onClick={closePopup}>
          <div className={`imgBox ${styles.popup}`}>
            <img src={imageURL} alt="big_img" />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
