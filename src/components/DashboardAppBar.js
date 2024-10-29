// src/components/DashboardAppBar.js
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightIcon from "@mui/icons-material/LightMode";
import DarkIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NavButton from "./NavButton";
import PropTypes from "prop-types";

const DashboardAppBar = ({
  darkMode,
  handleThemeChange,
  tabIndex,
  setTabIndex,
}) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{
        background: darkMode
          ? `linear-gradient(90deg, ${"#9C8CFF"}, ${
              theme.palette.background.paper
            })`
          : `linear-gradient(90deg, ${"#9C8CFF"} 35%, ${
              theme.palette.background.paper
            })`,
        transition: "background 0.5s ease, color 0.5s ease",
      }}
    >
      <Toolbar>
        {/* TITLE */}

        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <DashboardIcon
            sx={{ mr: 1.5, fontSize: "1.7rem", color: "#FFFFFF" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              display: "flex",
              alignItems: "center",
              textShadow: "0px 2px 10px rgba(0,0,0,1)",
              color: "#FFFFFF",
              transition: "color 0.3s ease, text-shadow 0.3s ease",
            }}
          >
            Daerbot Dashboard
          </Typography>
        </Box>

        {/* NAVIGATION BUTTONS */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <NavButton
            icon={<HomeIcon />}
            label="Overview"
            selected={tabIndex === 0}
            onClick={() => setTabIndex(0)}
          />
          <NavButton
            icon={<ListAltIcon />}
            label="Commands"
            selected={tabIndex === 1}
            onClick={() => setTabIndex(1)}
          />
        </Box>

        {/* DARK MODE ICON BUTTON */}
        <IconButton
          onClick={handleThemeChange}
          role="button"
          tabIndex={0}
          aria-label="Toggle light/dark theme"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleThemeChange();
            }
          }}
          sx={{
            ml: 1,
            padding: "8px",
            borderRadius: "12px",
            cursor: "pointer",
            backgroundColor: "transparent",
            color: theme.palette.background.darkmodeswitch,
            transition:
              "background-color 0.3s, color 0.3s, transform 0.2s, box-shadow 0.3s ease",
            "&:hover": {
              backgroundColor: theme.palette.primary.buttonhover,
              color: theme.palette.primary.buttontexthover,
              transform: "scale(1.025)",
              boxShadow: "0 0px 12px rgba(0, 0, 0, 0.6)",
            },
            marginRight: "10px",
            outline: "none",
          }}
        >
          {darkMode ? <LightIcon /> : <DarkIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

DashboardAppBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleThemeChange: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  setTabIndex: PropTypes.func.isRequired,
};

export default DashboardAppBar;
