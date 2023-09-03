import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem, Typography } from "@mui/material";
import { ExpandMoreOutlined, ExpandLessOutlined } from "@mui/icons-material";
import styles from "./style.module.css";

const DropDown = ({ route }) => {
  const [anchorEle, setAnchorEle] = useState(null);
  const open = Boolean(anchorEle);

  const handleOpenDropDown = (event) => {
    setAnchorEle(event.currentTarget);
  };

  const handleCloseDropDown = () => {
    setAnchorEle(null);
  };

  return (
    <>
      <Typography
        id="insights-btn"
        onMouseOver={handleOpenDropDown}
        aria-controls={open ? "insights-submenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="body2"
        color="text.secondary"
        sx={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}
      >
        {route.title}
        {open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
      </Typography>

      <Menu
        id="insights-submenu"
        anchorEl={anchorEle}
        open={open}
        onClose={handleCloseDropDown}
        MenuListProps={{
          "aria-labelledby": "insights-btn",
          onMouseLeave: handleCloseDropDown,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {route.insightsData.map(({ path, title }) => (
          <MenuItem key={title} onClick={handleCloseDropDown}>
            <Typography variant="body2" color="text.secondary">
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
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropDown;
