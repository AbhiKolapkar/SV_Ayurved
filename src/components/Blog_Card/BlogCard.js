import React from "react";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ReactComponent as NextLineImg } from "../../assets/icons/next_line.svg";
import { ReactComponent as CalenderIcon } from "../../assets/icons/calendar.svg";
import styles from "./style.module.css";

const BlogCard = (props) => {
  const { id, image, date, category, title, desc, slug } = props;
  const blogTitle = slug.split("/")[4];

  return (
    <>
      <div key={id} className={styles.blogCard}>
        <div className={`imgBox ${styles.img}`}>
          <NavLink to={`/blog/${blogTitle}`}>
            <img src={image} alt="" loading="lazy" />
          </NavLink>
        </div>

        <div className={styles.blog_content}>
          <Typography
            variant="subtitle1"
            color="text.tertiary"
            className={styles.category}
          >
            <sup>Category: {category}</sup>
          </Typography>

          <div className={styles.content}>
            <Typography
              variant="h5"
              color="text.secondary"
              className={styles.title}
            >
              <NavLink to={`/blog/${blogTitle}`}>{title}</NavLink>
            </Typography>

            <pre>
              <Typography
                variant="body1"
                color="text.tertiary"
                className={styles.desc}
              >
                {desc}
              </Typography>
            </pre>
          </div>

          <div className={styles.meta_info}>
            <button className={styles.read_moreBtn}>
              <NavLink to={`/blog/${blogTitle}`}>
                <Typography variant="button" color={"text.secondary"}>
                  Read More
                </Typography>
                <NextLineImg />
              </NavLink>
            </button>

            <div className={styles.date}>
              <CalenderIcon />
              <Typography variant="body2">
                {`${new Date(date).getDate()}/${
                  new Date(date).getMonth() + 1
                }/${new Date(date).getFullYear()}`}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
