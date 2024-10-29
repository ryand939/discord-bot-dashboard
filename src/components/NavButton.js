// src/components/NavButton.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";

const NavButton = ({ icon, label, selected, onClick }) => {
  const theme = useTheme();

  const selectedBgColor = selected
    ? alpha(theme.palette.primary.main, 0.3) 
    : "transparent";


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
        padding: { xs: "4px 8px", sm: "8px 16px" }, 
        borderRadius: "12px",
        cursor: "pointer",
        backgroundColor: selectedBgColor,
        color: theme.palette.text.primary,
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
        marginRight: "8px",
        outline: "none",
        flex: "0 0 auto", 
        "& .MuiTypography-root": {
          fontSize: { xs: "0.8rem", sm: "1rem" }, 
        },
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
