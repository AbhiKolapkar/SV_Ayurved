import React from "react";
import { Box, Typography } from "@mui/material";
import dividerImg from "../../assets/icons/divider.svg";
import styles from "./style.module.css";

// sections - Title
export const Title = ({ align, variant, title, visible, color }) => {
  return (
    <>
      <Box
        className={styles.title_box}
        sx={{ justifyContent: align ?? "center" }}
      >
        <Typography
          variant={variant ?? "h2"}
          color={`text.${color ?? "secondary"}`}
          sx={{ visibility: visible }}
          textAlign="center"
        >
          {title}
        </Typography>

        <Box className={styles.divider_ImgBox}>
          <img src={dividerImg} alt="divider-img" />
        </Box>
      </Box>
    </>
  );
};

// Sections - SubTitle
export const SubTitle = ({ title, subText }) => {
  return (
    <>
      <Box my={"1.5rem"}>
        <h3 className={styles.subTitle}>{title}</h3>
        <p className={styles.subText}>{subText}</p>
      </Box>
    </>
  );
};
