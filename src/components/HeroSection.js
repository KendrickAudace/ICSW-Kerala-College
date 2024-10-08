import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '40vh',
      
        backgroundImage: 'url("../school-background-fvzmkdcjswmjz5y7.jpg")', // Replace with your hero image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
        Welcome to ICSW Kerala College
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Empowering Communities through Education and Support
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Learn More
      </Button>
      
    </Box>
  );
};

export default HeroSection;
