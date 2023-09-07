import React, { useEffect, useState } from "react";
import { Container, useMediaQuery } from "@mui/material";
import axios from "axios";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import Fallback from "../../common/Fallback";
import { TREATMENTS_API_URL } from "../../data/constant";
import useDocTitle from "../../hooks/useDocTitle";

const Treatments = () => {
  useDocTitle('Treatments')
  const isMobile = useMediaQuery("(max-width:" + 600 + "px)");
  const { treatmentBanner } = BannerImages_Data;
  const [treatmentsData, setTreatmentsData] = useState(null);

  useEffect(() => {
    axios
      .get(TREATMENTS_API_URL)
      .then((res) => setTreatmentsData(res.data.treatments))
      .catch((error) => console.error("error fetching data", error));
  }, []);

  return (
    <>
      <section className="section">
        {!isMobile ? (
          <Container maxWidth="xxl">
            <div className="imgBox">
              <img src={treatmentBanner} alt="" loading="lazy" />
            </div>
          </Container>
        ) : (
          <div className="imgBox banner">
            <img src={treatmentBanner} alt="" loading="lazy" />
          </div>
        )}
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title="SV Treatments" />

          {treatmentsData ? <Tabs data={treatmentsData} /> : <Fallback />}
        </Container>
      </section>
    </>
  );
};

export default Treatments;
