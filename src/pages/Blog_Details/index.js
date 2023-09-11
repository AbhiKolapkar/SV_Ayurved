import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { BLOG_DETAILS_API_URL } from "../../data/constant";
import { Title } from "../../components/Title/Title";
import useDocTitle from "../../hooks/useDocTitle";
import Fallback from "../../common/Fallback";
import './style.css'

const BlogDetails = () => {
  useDocTitle("Blog Details");
  const { blogTitle } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch blog details using the title
    const fetchBlogDetails = async () => {
      setLoading(true);
      try {
        const response = await axios
          .get(`${BLOG_DETAILS_API_URL}/${blogTitle}`)
          .then((res) => setBlogData(res.data));
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false)
      }
    };
    fetchBlogDetails();
  }, [blogTitle]);

  const { id, image, title, content, category, date } = blogData;

  return (
    <>
      {loading ? (
        <Fallback />
      ) : (
        <>
          <section className="section" key={id}>
            <Container maxWidth="xl">
              <div className="imgBox">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className='blogImg'
                />
              </div>
            </Container>
          </section>

          <Container maxWidth="lg" className="section">
            <Title title={title} />
          </Container>

          <section className="section">
            <Container maxWidth="lg">
              <div className='blogs_info'>
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

                <div
                  dangerouslySetInnerHTML={{ __html: content }}
                  className='blog_content'
                />
              </div>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default BlogDetails;
