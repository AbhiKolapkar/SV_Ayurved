import React, { useEffect, useState } from "react";
import { Container, useMediaQuery } from "@mui/material";
import axios from "axios";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import Fallback from "../../common/Fallback";
import { SESSIONS_API_URL } from "../../data/constant";

const Sessions = () => {
  const isMobile = useMediaQuery("(max-width:" + 600 + "px)");
  const { sessionBanner } = BannerImages_Data;
  const [sessionsData, setSessionsData] = useState(null);

  useEffect(() => {
    axios
      .get(SESSIONS_API_URL)
      .then((res) => setSessionsData(res.data.sessions))
      .catch((error) => console.error("error fetching data", error));
  }, [SESSIONS_API_URL]);

  return (
    <>
      <section className="section">
        {!isMobile ? (
          <Container maxWidth="xxl">
            <div className="imgBox">
              <img src={sessionBanner} alt="" loading="lazy" />
            </div>
          </Container>
        ) : (
          <div className="imgBox banner">
            <img src={sessionBanner} alt="" loading="lazy" />
          </div>
        )}
      </section>

      <section className="section">
        <Container maxWidth="xl">
          <Title title="SV Sessions" />

          {sessionsData ? <Tabs data={sessionsData} /> : <Fallback />}
        </Container>
      </section>
    </>
  );
};

export default Sessions;
