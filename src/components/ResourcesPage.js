import React from 'react';
import {  Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const resources = [
  {
    title: 'Tuition Fees Structure 2024',
    description: 'Detailed breakdown of the tuition fees for the academic year 2024.',
    link: '/resources/tuition-fees.pdf',
  },
  {
    title: 'Scholarship Guidelines',
    description: 'Information on available scholarships and application procedures.',
    link: '/resources/scholarships.pdf',
  },
  {
    title: 'Student Handbook',
    description: 'Comprehensive guide for students covering policies, procedures, and services.',
    link: '/resources/student-handbook.pdf',
  },
  {
    title: 'Code of Conduct',
    description: 'University policies and expectations for student behavior.',
    link: '/resources/code-of-conduct.pdf',
  },
  {
    title: 'Graduation Requirements',
    description: 'Outline of requirements necessary for graduation.',
    link: '/resources/graduation-requirements.pdf',
  },
];

const ResourcesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        University Resources
      </Typography>
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="textPrimary" gutterBottom>
                  {resource.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={resource.link}
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security feature
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResourcesPage;
