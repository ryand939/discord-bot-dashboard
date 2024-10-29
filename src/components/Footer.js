// src/components/Footer.js
import React from "react";
import { Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ timestamp }) => {
  return (
    <footer className="footer" style={{ marginTop: "auto" }}>
      <Divider />
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ py: 2 }}
      >
        This information is automatically updated every 90 minutes. Last updated
        on{" "}
        {timestamp
          ? new Date(timestamp.seconds * 1000).toLocaleString()
          : "N/A"}
      </Typography>
    </footer>
  );
};

Footer.propTypes = {
  timestamp: PropTypes.object,
};

export default Footer;
