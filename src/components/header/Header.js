import React from "react";
import { Container, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/SV_Logo.svg";
import { DesktopMenu, MobileMenu, TabMenu } from "./NavMenu";
import BookingBtn from "../../common/BookingBtn";
import styles from "./style.module.css";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:" + 1240 + "px)");
  const isMobile = useMediaQuery("(max-width:" + 900 + "px)");

  return (
    <>
      <header className={styles.header}>
        <Container maxWidth="xxl">
          <div className={styles.toolbar}>
            <div className="imgBox">
              <NavLink to="/">
                <img src={logo} alt="logo" width={200} />
              </NavLink>
            </div>

            <div className={styles.menu}>
              {isDesktop ? (
                <DesktopMenu />
              ) : isMobile ? (
                <MobileMenu />
              ) : (
                <TabMenu />
              )}
            </div>

            <div className={styles.btn}>
              <BookingBtn />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
