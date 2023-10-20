import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Dna } from "react-loader-spinner";

const loader = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Fallback = () => {
  const [showFallback, setShowFallback] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowFallback(false), 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (showFallback) {
    return (
      <Container maxWidth="xl">
        <div style={loader}>
          <Dna visible={true} width={80} height={80} />
        </div>
      </Container>
    );
  }

  return null
};

export default Fallback;
