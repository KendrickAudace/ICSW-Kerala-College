import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const programs = [
  {
    imgSrc: '../Bsc-CS.jpg', // Replace with your image path
    title: 'BSc in Computer Science',
    description: 'Explore the fundamentals of computer science and programming.',
    link: '/programs/computer-science',
  },
 
  {
    imgSrc: '../ba-psychology-video-bg.jpg', // Replace with your image path
    title: 'Bachelor of Arts in Psychology',
    description: 'Study human behavior and mental processes in depth.',
    link: '/programs/psychology',
  },
  {
    imgSrc: '../MBA.jpg', // Replace with your image path
    title: 'Master of Business Administration',
    description: 'Develop your skills in business management.',
    link: '/programs/mba',
  },

  {
    imgSrc: '../BSc-Environmental-Sciences.jpg', // Replace with your image path
    title: 'BSc in Environmental Science',
    description: 'Understand ecological principles.',
    link: '/programs/environmental-science',
  },
  
  {
    imgSrc: '../Asset-1.jpg', // Replace with your image path
    title: 'Master of Science in Data Science',
    description: 'Leverage data analytics to drive decision-making in organizations.',
    link: '/programs/data-science',
  },
 
  {
    imgSrc: '../images (1).jpeg', // Replace with your image path
    title: 'Bachelor of Arts in History',
    description: 'Delve into the past to understand historical events and their impact.',
    link: '/programs/history',
  },





];

const ProgramsPage = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Popular Programs
      </Typography>
      <Grid container spacing={4}>
        {programs.map((program, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ textAlign: 'center' }}>
              <CardContent>
                <Box
                  component="img"
                  src={program.imgSrc}
                  alt={program.title}
                  sx={{ width: '100%', height: 'auto', mb: 2 }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {program.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {program.description}
                </Typography>
                <Button variant="contained" color="primary" href={program.link}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProgramsPage;
