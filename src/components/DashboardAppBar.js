// src/components/DashboardAppBar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightIcon from "@mui/icons-material/LightMode";
import DarkIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NavButton from "./NavButton";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const DashboardAppBar = ({
  darkMode,
  handleThemeChange,
  tabIndex,
  setTabIndex,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700)); // mobile or secondary display is when below 700 pixel
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    {
      label: "Overview",
      icon: <HomeIcon />,
      index: 0,
    },
    {
      label: "Commands",
      icon: <ListAltIcon />,
      index: 1,
    },
  ];

  return (
    <>
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
          minHeight: { xs: "60px", sm: "64px" },
        }}
      >
        <Toolbar
          sx={{
            flexWrap: "nowrap",
            paddingLeft: { xs: "8px", sm: "16px" },
            paddingRight: { xs: "8px", sm: "16px" },
            justifyContent: "space-between",
            overflow: "visible", 
            minHeight: { xs: "60px", sm: "64px" }, 
          }}
        >
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              size="large"
              sx={{
                mr: 2,
                pl: 2.5,
                pr: 2,
                py: 2.2,
                filter: "drop-shadow(0px 1px 7px rgba(0, 0, 0, 1))",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* TITLE */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              minWidth: 0,
            }}
          >
            <DashboardIcon
              sx={{
                mr: 0.5,
                fontSize: "1.7rem",
                color: "#FFFFFF",
                filter: "drop-shadow(0px 1px 10px rgba(0, 0, 0, 1))",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: "bold",
                letterSpacing: "1px",
                display: "flex",
                alignItems: "center",
                textShadow: "0px 2px 10px rgba(0,0,0,1)",
                color: "#FFFFFF",
                transition: "color 0.3s ease, text-shadow 0.3s ease",
                whiteSpace: "nowrap",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                p: 1,
              }}
            >
              Daerbot Dashboard
            </Typography>
          </Box>

          {/* nav buttons on desktop */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
              }}
            >
              {navItems.map((item) => (
                <NavButton
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  selected={tabIndex === item.index}
                  onClick={() => setTabIndex(item.index)}
                />
              ))}
            </Box>
          )}

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
              p: 2,
              padding: "8px",
              borderRadius: "12px",
              cursor: "pointer",
              backgroundColor: "transparent",
              color: theme.palette.background.darkmodeswitch,
              filter: "drop-shadow(0px 1px 10px rgba(0, 0, 0, 1))",
              transition:
                "background-color 0.3s, color 0.3s, transform 0.2s, box-shadow 0.3s ease",
              "@media (hover: hover)": { 
                "&:hover": {
                  backgroundColor: theme.palette.primary.buttonhover,
                  color: theme.palette.primary.buttontexthover,
                  transform: "scale(1.025)",
                  boxShadow: "0 0px 12px rgba(0, 0, 0, 0.6)",
                },
              },
              marginRight: "10px",
              outline: "none",
            }}
          >
            {darkMode ? <LightIcon /> : <DarkIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* drawer for mobile or skinny screen */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, 
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                selected={tabIndex === item.index}
                onClick={() => setTabIndex(item.index)}
                sx={{
                  backgroundColor:
                    tabIndex === item.index
                      ? theme.palette.primary.themecolor
                      : theme.palette.background.drawer,
                  color:
                    tabIndex === item.index
                      ? "#ffffff" 
                      : theme.palette.text.primary,
                  textShadow:
                    tabIndex === item.index
                      ? "0px 1px 7px rgba(0, 0, 0, 1)"
                      : "none",
                  px: 2,
                  py: 1,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.buttonhover,
                    color: "#ffffff", 
                    textShadow:
                      tabIndex === item.index
                        ? "0px 1px 7px rgba(0, 0, 0, 1)"
                        : "none",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "inherit", 
                    filter:
                      tabIndex === item.index
                        ? "drop-shadow(0px 1px 7px rgba(0, 0, 0, 1))"
                        : "none",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

DashboardAppBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleThemeChange: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  setTabIndex: PropTypes.func.isRequired,
};

export default DashboardAppBar;
