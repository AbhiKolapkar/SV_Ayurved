import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { BannerImages_Data } from "../../data/images";
import { Counter_Data } from "../../data/constant";
import styles from "./style.module.css";

const Counter = () => {
  const { counterBanner } = BannerImages_Data;
  const [counterOn, setCounterOn] = useState(false);
  const onEnter = () => {
    setCounterOn(true);
  };
  const onExit = () => {
    setCounterOn(false);
  };

  return (
    <>
      <ScrollTrigger onEnter={onEnter} onExit={onExit}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            backgroundImage: `url(${counterBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: { xs: "cover", lg: "100%" },
          }}
        >
          <Container maxWidth="lg">
            <Box className={styles.counter_container}>
              {Counter_Data.map(({ id, icon, count, text }) => (
                <Box key={id} className={styles.counterBox}>
                  <img
                    src={icon}
                    alt=""
                    width={id === 3 ? 65 : 55}
                    style={{ borderRadius: 0 }}
                  />
                  <div className={styles.counter}>
                    {counterOn && (
                      <CountUp start={0} end={count} delay={0}>
                        {({ countUpRef }) => (
                          <>
                            <span ref={countUpRef}></span>
                            <span>+</span>
                          </>
                        )}
                      </CountUp>
                    )}
                  </div>
                  <Typography
                    variant="subtitle1"
                    color="text.quinary"
                    textAlign="center"
                    mt={"auto"}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Container>
      </ScrollTrigger>
    </>
  );
};

export default Counter;
