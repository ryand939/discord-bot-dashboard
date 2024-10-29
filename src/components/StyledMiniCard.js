// src/StyledMiniCard.js

import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledMiniCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.minicard,
  borderRadius: 14,
  boxShadow: theme.shadows[1],
  transition:
    "transform 0.15s ease, box-shadow 0.2s ease, background-color 0.3s ease",
  "&:hover": {
    transform: "scale(1.01)",
    boxShadow: `0 2px 15px rgba(0, 0, 0, 0.5), 
               0 0 6px ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.minicardhover,
  },
}));

export default StyledMiniCard;
