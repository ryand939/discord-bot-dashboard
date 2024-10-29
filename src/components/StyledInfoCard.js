// src/StyledInfoCard.js

import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledInfoCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16, 
  padding: theme.spacing(2),
  boxShadow: theme.shadows[4],
  transition: 'transform 0.25s ease, box-shadow 0.1s ease, background-color 0.5s ease', 
  '&:hover': {
    transform: 'scale(1.01)',
    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.3), 
               0 0 14px ${theme.palette.primary.main}`,
  },
}));

export default StyledInfoCard;
