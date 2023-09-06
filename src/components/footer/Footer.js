import React from "react";
import { Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  Contacts_Data,
  ExtraLinks_Data,
  NavLinks_Data,
  SocialLinks_Data,
} from "../../data/constant";
import styles from "./style.module.css";
import logo from "../../assets/icons/SV_Logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className={styles.fTop}>
          <Container maxWidth="xxl">
            <div className={styles.grid_container}>
              <div className={styles.grid_item}>
                <img src={logo} alt="" className={styles.logo} />

                <Typography variant="body2" color={"text.secondary"}>
                  Planning to create healthier world around us.
                </Typography>

                <ul className={styles.social_links}>
                  {SocialLinks_Data.map(({ id, platform, path }) => (
                    <li key={id}>
                      <a href={path}>
                        <img src={platform} alt={platform} loading="lazy" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.grid_item} ${styles.links_container}`}>
                <div className={styles.grid_item}>
                  <div className={styles.caption}>
                    <Typography variant="subtitle1" color={"text.secondary"}>
                      Quick Links
                    </Typography>
                  </div>

                  <ul className={styles.links}>
                    {NavLinks_Data.map(({ title, path }) => (
                      <li key={title}>
                        <Typography variant="body2" color={"text.secondary"}>
                          <NavLink
                            to={path}
                            className={(navClass) =>
                              navClass.isActive
                                ? `${styles.menuItem} ${styles.active}`
                                : `${styles.menuItem}`
                            }
                          >
                            {title}
                          </NavLink>
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.grid_item}>
                  <div className={styles.caption}>
                    <Typography variant="subtitle1" color={"text.secondary"}>
                      Miscellaneous Links
                    </Typography>
                  </div>

                  <ul className={styles.links}>
                    {ExtraLinks_Data.map(({ title, path }) => (
                      <li key={title}>
                        <Typography variant="body2" color={"text.secondary"}>
                          <NavLink
                            to={path}
                            className={(navClass) =>
                              navClass.isActive
                                ? `${styles.menuItem} ${styles.active}`
                                : `${styles.menuItem}`
                            }
                          >
                            {title}
                          </NavLink>
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.grid_item}>
                <div className={styles.caption}>
                  <Typography variant="subtitle1" color={"text.secondary"}>
                    Contact US
                  </Typography>
                </div>

                <ul className={styles.contact_data}>
                  {Contacts_Data.map(({ id, icon, text }) => (
                    <li key={id}>
                      <div className="imgBox">
                        <img src={icon} alt="" />
                      </div>
                      <pre>
                        <Typography variant="body2" color={"text.secondary"}>
                          {text}
                        </Typography>
                      </pre>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>

        <Container maxWidth="xxl">
          <div className={styles.copyright_textBox}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              textAlign={"center"}
              width={{ xs: "100%", sm: "auto" }}
            >
              All Rights Reserved © {currentYear} SVAyurved
            </Typography>

            <Typography
              variant="body2"
              color={"text.secondary"}
              textAlign={"center"}
              width={{ xs: "100%", sm: "auto" }}
            >
              Website crafted by{" "}
              <a
                href="http://skillnuts.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skillnuts
              </a>
            </Typography>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
