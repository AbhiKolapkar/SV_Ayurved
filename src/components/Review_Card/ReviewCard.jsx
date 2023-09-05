import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import card_divider_icon from "../../assets/icons/card-divider.svg";
import styles from "./style.module.css";

const ReviewCard = ({ id, image, userName, reviewText, starCount }) => {
  const getInitials = (string) => {
    var names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return (
    <>
      <div className={styles.reviewCard} key={id}>
        <Box className={styles.user_data} textAlign="center">
          {image ? (
            <div className={styles.user_img}>
              <img data-src={image} alt="" className="lazyload" />
            </div>
          ) : (
            <Avatar className={styles.avatar}>{getInitials(userName)}</Avatar>
          )}
          <div className={styles.info}>
            <Typography variant="h5" color="text.secondary">
              {userName}
            </Typography>
            <span className={styles.rating_star}>
              {starCount &&
                [...Array(starCount)].map((_, i) => <Star key={i} />)}
            </span>
          </div>
        </Box>

        <Box className={styles.review_text}>
          <div className={styles.circle}>
            <img data-src={card_divider_icon} alt="" className="lazyload" />
          </div>
          <pre>
            <Typography variant="subtitle2" color="text.secondary">
              {reviewText}
            </Typography>
          </pre>
        </Box>
      </div>
    </>
  );
};

export default ReviewCard;
