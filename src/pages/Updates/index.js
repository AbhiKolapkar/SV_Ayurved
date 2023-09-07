import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";
import useDocTitle from "../../hooks/useDocTitle";

const Updates = () => {
  useDocTitle('Recent Updates')
  const isMobile = useMediaQuery("(max-width:" + 600 + "px)");
  const { updateBanner } = BannerImages_Data;
  return (
    <>
      <section className="section">
        {!isMobile ? (
          <Container maxWidth="xxl">
            <div className="imgBox">
              <img src={updateBanner} alt="" loading="lazy" />
            </div>
          </Container>
        ) : (
          <div className="imgBox banner">
            <img src={updateBanner} alt="" loading="lazy" />
          </div>
        )}
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title="Recent Updates" />
        </Container>
      </section>
    </>
  );
};

export default Updates;
