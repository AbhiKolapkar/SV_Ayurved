import React, { useEffect, useState } from "react";
import { Container, useMediaQuery } from "@mui/material";
import { Title } from "../../components/Title/Title";
import Scroll from "../../components/Infinite_Scroll/Scroll";
import BlogCard from "../../components/Blog_Card/BlogCard";
import { BLOGS_API_URL } from "../../data/constant";

const Blogs = () => {
  const isMobile = useMediaQuery("(max-width:" + 600 + "px)");
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch(BLOGS_API_URL)
      .then((res) => res.json())
      .then((data) => setBlogsData(data.blogs))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <>
      <section className="section">
        <Title title="Our Blogs" />

        {!isMobile ? (
          <Container maxWidth="xl">
            <Scroll data={blogsData} Component={BlogCard} />
          </Container>
        ) : (
          <Container maxWidth="xl" disableGutters>
            <Scroll data={blogsData} Component={BlogCard} />
          </Container>
        )}
      </section>
    </>
  );
};

export default Blogs;
