import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { BookingBtn } from "../../common/BookingBtn";
import styles from "./style.module.css";

const Card = (props) => {
  const location = useLocation();
  const { image, title, shortDesc, desc } = props;

  return (
    <>
      <div className={styles.card}>
        <div className={`imgBox ${styles.img}`}>
          <img src={image} alt="" loading="lazy" width={352} />
        </div>

        <div className={styles.contentBox}>
          <div>
            <Typography
              variant="h5"
              color="text.secondary"
              className={styles.title}
            >
              {title}
            </Typography>

            {shortDesc && (
              <pre>
                <Typography
                  variant="subtitle2"
                  color="text.tertiary"
                  className={styles.desc}
                >
                  {shortDesc}
                </Typography>
              </pre>
            )}

            {desc && (
              <pre>
                <Typography
                  variant="subtitle2"
                  color="text.tertiary"
                  className={styles.desc}
                >
                  {desc}
                </Typography>
              </pre>
            )}
          </div>

          {location.pathname === "/" || location.pathname === "/home" ? (
            ""
          ) : (
            <div style={{ textAlign: "center", marginTop: "auto" }}>
              <BookingBtn isOnCard={true} title={title} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
