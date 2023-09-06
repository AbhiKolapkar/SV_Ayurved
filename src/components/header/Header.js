import React, { useLayoutEffect, useRef } from "react";
import { Container, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/SV_Logo.svg";
import { DesktopMenu, MobileMenu, TabMenu } from "./NavMenu";
import {BookingBtn} from "../../common/BookingBtn";
import styles from "./style.module.css";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:" + 1240 + "px)");
  const isMobile = useMediaQuery("(max-width:" + 900 + "px)");

  const stickyHeader = useRef()
  useLayoutEffect(() => {
    const header = document.querySelector('header')
    const fixedHeader = () => {
      if(window.pageYOffset > 200) {
        header.classList.add(`${styles.is_sticky}`)
      }
      else {
        header.classList.remove(`${styles.is_sticky}`)
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  return (
    <>
      <header className={styles.header} ref={stickyHeader}>
        <Container maxWidth="xxl">
          <div className={styles.toolbar}>
            <div className="imgBox">
              <NavLink to="/">
                <img src={logo} alt="logo" className={styles.logo} />
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
