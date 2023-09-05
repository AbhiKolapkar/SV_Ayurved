import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Title } from "../Title/Title";
import { BookingBtn } from "../../common/BookingBtn";

export const QuoteBanner = ({ bgImg, quote }) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "cover", sm: "100%" },
          backgroundPosition: { xs: "left", sm: "center" },
        }}
      >
        <Box py={6}>
          <Typography variant="h4" color="text.primary" textAlign="center">
            {quote}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export const CTA_Banner = ({ bgImg, text }) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "cover", lg: "100%" },
          backgroundPosition: { xs: "left", sm: "center" },
        }}
      >
        <Box textAlign={"center"} py={5}>
          <Title variant={"h4"} title={text} color={"primary"} />

          <BookingBtn />
        </Box>
      </Container>
    </>
  );
};
