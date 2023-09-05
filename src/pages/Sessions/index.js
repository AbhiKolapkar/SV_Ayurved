import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { BannerImages_Data } from "../../data/images";
import { Title } from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import Fallback from "../../common/Fallback";
import { SESSIONS_API_URL } from "../../data/constant";

const Sessions = () => {
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
        <Container maxWidth="xxl">
          <div className="imgBox">
            <img src={sessionBanner} alt="" loading="lazy" />
          </div>
        </Container>
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
