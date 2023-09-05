import React from "react";
import { Container } from "@mui/material";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";

const Updates = () => {
  const { updateBanner } = BannerImages_Data;
  return (
    <>
      <section className="section">
        <Container maxWidth="xxl">
          <div className="imgBox">
            <img src={updateBanner} alt="" loading="lazy" />
          </div>
        </Container>
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
