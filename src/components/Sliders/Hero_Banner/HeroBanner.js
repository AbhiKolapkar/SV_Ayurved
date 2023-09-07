import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { Main_Banner_Data } from "../../../data/constant";
import { ReactComponent as RightUpArrow } from "../../../assets/icons/right_up_arrow.svg";
import "./style.css";

const HeroBanner = () => {
  const [textContent, setTextContent] = useState(Main_Banner_Data[0]);
  const [slideOut, setSlideOut] = useState(false);

  const delay = 10000; // 10 seconds Delay in milliseconds between text changes

  useEffect(() => {
    let currentIndex = 1;

    const interval = setInterval(() => {
      setSlideOut(true);  // Slide out the text to the top

      setTimeout(() => {
        // Update the text with the next value after the slide-out animation
        setTextContent(Main_Banner_Data[currentIndex]);
        currentIndex = (currentIndex + 1) % Main_Banner_Data.length;

        setSlideOut(false);  // Slide in the new text from the bottom
      }, 800);
    }, delay);

    return () => clearInterval(interval);
  }, []);

  const { id, title, contentText, btnText, path } = textContent;

  return (
    <>
      <div className="banner-wrapper">
        <div className="bg_img"></div>

        <div key={id} className={`content ${slideOut ? "slide-out" : ""}`}>
          <div className="textContent">
            <div className="title">
              <pre>
                <Typography variant="h1" color="text.primary">
                  {title}
                </Typography>
              </pre>
            </div>
            <div className="desc">
              <pre>
                <Typography
                  variant="body1"
                  color="text.primary"
                  fontSize={{ xs: "0.75rem", sm: "1rem" }}
                >
                  {contentText}
                </Typography>
              </pre>
            </div>
          </div>

          <NavLink to={path}>
            <button className="img_btn">
              <Typography
                variant="button"
                color="text.primary"
                fontSize={{ xs: "0.875rem", sm: "1rem" }}
              >
                {btnText}
              </Typography>
              <RightUpArrow fill={"#FFFFFF"} />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
