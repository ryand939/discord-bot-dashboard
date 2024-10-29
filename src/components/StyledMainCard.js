// src/StyledMainCard.js

import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMainCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16, 
  boxShadow: theme.shadows[4],
  transition: 'background-color 0.5s ease'
}));

export default StyledMainCard;
