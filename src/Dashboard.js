// src/Dashboard.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";
import "./Dashboard.css";

// MUI import
import { CircularProgress, CssBaseline, Container, Box } from "@mui/material";

// MUI theme
import { createTheme, ThemeProvider } from "@mui/material/styles";

import SwipeableViews from "react-swipeable-views";

// site Components
import DashboardAppBar from "./components/DashboardAppBar";
import OverviewSection from "./components/OverviewSection";
import CommandsSection from "./components/CommandsSection";
import Footer from "./components/Footer";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // theme state, default dark
  const [darkMode, setDarkMode] = useState(true);

  // tabs state
  const [tabIndex, setTabIndex] = useState(0);

  // control animation state
  const [checked, setChecked] = useState(false);

  // MUI THEME
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Roboto, sans-serif",
        },
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: darkMode ? "#9C8CFF" : "#5C41FF",
            buttonhover: "#7A67FF", 
            buttontexthover: "#ffffff",
            buttonselectedtext: "#ffffff", 
            themecolor: darkMode ? "#9C8CFF" : "#9C8CFF",
          },
          secondary: {
            main: darkMode ? "#B8ADFF" : "#4D30FC",
          },
          background: {
            default: darkMode ? "#121212" : "#f5f5f5",
            paper: darkMode ? "#1e1e1e" : "#ffffff",
            minicard: darkMode ? "#2c2c2c" : "#eaeaea",
            minicardhover: darkMode ? "#3c3c3c" : "#dadada",
            drawer: darkMode ? "#3f3f3f" : "#ffffff",
            darkmodeswitch: darkMode ? "#f5f5f5" : "#121212",
          },
          text: {
            primary: darkMode ? "#ffffff" : "#000000",
            primaryinverted: darkMode ? "#000000" : "#ffffff",
          },
        },
      }),
    [darkMode]
  );

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleTabIndexChange = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    const docRef = doc(db, "daerbot_dashboard", "info");

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setError("No such document!");
        }
        setLoading(false);
        setChecked(true);
      },
      (error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  if (loading)
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="loading-container">
          <CircularProgress size={80} />
        </div>
      </ThemeProvider>
    );

  if (error)
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="error-message">{error}</div>
      </ThemeProvider>
    );

  if (!data)
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>No data available.</div>
      </ThemeProvider>
    );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Custom AppBar with Navigation Buttons - USING DashboardAppBar COMPONENT*/}
      <DashboardAppBar
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />

      <Container sx={{ py: 3 }}>
        <SwipeableViews
          index={tabIndex}
          onChangeIndex={handleTabIndexChange}
          enableMouseEvents
          resistance
          springConfig={{ duration: "0.5s", damping: 0.8, stiffness: 130 }}
        >
          {/* Overview Tab - USING OverviewSection COMPONENT */}
          <Box
            role="tabpanel"
            hidden={tabIndex !== 0}
            id={`dashboard-tabpanel-0`}
            aria-labelledby={`dashboard-tab-0`}
            sx={{ py: 3, marginBottom: 2 }}
          >
            {tabIndex === 0 && (
              <OverviewSection data={data} checked={checked} />
            )}
          </Box>

          {/* Commands Tab - USING CommandsSection COMPONENT */}
          <Box
            role="tabpanel"
            hidden={tabIndex !== 1}
            id={`dashboard-tabpanel-1`}
            aria-labelledby={`dashboard-tab-1`}
            sx={{ py: 3, marginBottom: 2 }}
          >
            {tabIndex === 1 && (
              <CommandsSection commands={data.commands} checked={checked} />
            )}
          </Box>
        </SwipeableViews>
      </Container>

      {/* FOOTER - USING Footer COMPONENT */}
      <Footer timestamp={data.timestamp} />
    </ThemeProvider>
  );
}

export default Dashboard;
