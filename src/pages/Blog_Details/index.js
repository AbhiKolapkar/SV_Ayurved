import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { BLOG_DETAILS_API_URL } from "../../data/constant";
import { Title } from "../../components/Title/Title";
import styles from "./style.module.css";

const BlogDetails = () => {
  const { Title } = useParams();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // fetch blog details using the title
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `${BLOG_DETAILS_API_URL}/${Title}`
        );
        setBlogData(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchBlogDetails();
  }, [Title]);

  const { id, image, title, content, category, date } = blogData;

  return (
    <>
      <section className="section" key={id}>
        <Container maxWidth="xl">
          <div className="imgBox">
            <img src={image} alt="" loading="lazy" />
          </div>
        </Container>
      </section>

      <Container maxWidth="lg" className="section">
        <Title title={title} />
      </Container>

      <section className="section">
        <Container maxWidth="lg">
          <div className={styles.blogs_info}>
            <Typography variant="subtitle1" color={"text.tertiary"}>
              <sup>{date}</sup>
            </Typography>
            <Typography variant="subtitle1" color={"text.tertiary"}>
              <sup>Category: {category}</sup>
            </Typography>
          </div>

          <div>
            <Typography variant="h5" color="text.secondary" mb={1}>
              {title}
            </Typography>

            <div dangerouslySetInnerHTML={{ __html: content }} className={styles.content} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
