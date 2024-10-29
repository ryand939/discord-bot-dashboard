// src/components/NavButton.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const NavButton = ({ icon, label, selected, onClick }) => {
  const theme = useTheme();

  return (
    <Box
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={label}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onClick();
        }
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        borderRadius: "12px",
        cursor: "pointer",
        backgroundColor: selected ? "#9C8CFF" : "transparent",
        color: selected
          ? theme.palette.primary.buttonselectedtext
          : theme.palette.text.primary,
        transition:
          "background-color 0.3s, color 0.3s, transform 0.2s, box-shadow 0.3s ease",
        "&:hover": {
          backgroundColor: theme.palette.primary.buttonhover,
          color: theme.palette.primary.buttontexthover,
          transform: "scale(1.025)",
          boxShadow: "0 0px 12px rgba(0, 0, 0, 0.6)",
        },
        marginRight: "8px",
        outline: "none",
      }}
    >
      {icon}
      <Typography variant="body1" sx={{ marginLeft: "8px" }}>
        {label}
      </Typography>
    </Box>
  );
};

NavButton.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
