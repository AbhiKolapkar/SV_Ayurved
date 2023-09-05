import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import styles from "./style.module.css";

const Accordion = ({ accordionData, bgColor }) => {
  const [clicked, setClicked] = useState(false);
  const [isExpand, setIsExpand] = useState(false)
  const toggle = (index) => {
    if (clicked === index) {
      setIsExpand(false)
      return setClicked(null); //if question is already active, then close it
    }
    setIsExpand(true)
    setClicked(index);
  };

  const IconStyle = {
    size: "25px",
    color: "var(--light-green)",
    cursor: "pointer",
  };

  return (
    <>
      <Box sx={{ background: bgColor, borderRadius: 2, pb: 3, px: 1 }}>
        <Container maxWidth="lg" disableGutters>
          <div className={styles.accordionSection}>
            {accordionData.map(({ id, question, answer }, index) => (
              <div key={id}>
                <ul className={`${styles.wrap} ${isExpand ? styles.expand : ''}`}>
                  <li
                    className={styles.quesBox}
                    onClick={() => toggle(id)}
                  >
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className={styles.accordion_title}
                    >
                      {question}
                    </Typography>
                  </li>
                  <span onClick={() => toggle(id)}>
                    {clicked === id ? (
                      <RemoveOutlined sx={IconStyle} />
                    ) : (
                      <AddOutlined sx={IconStyle} />
                    )}
                  </span>
                </ul>
                {clicked === id ? (
                  <div className={styles.dropDown}>
                    <pre>
                      <Typography variant="body2" color="text.quaternary">
                        {answer}
                      </Typography>
                    </pre>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Accordion;
