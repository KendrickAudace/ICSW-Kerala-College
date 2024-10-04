import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

const testimonials = [
  {
    name: 'Audace K',
    statement: 'ICSW Kerala has changed my life by providing access to great education.',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    name: 'Ange U',
    statement: 'I have gained so much knowledge and have been part of a supportive community.',
    avatar: '/path/to/avatar2.jpg',
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ p: 5, bgcolor: 'grey.100' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        What Our Students Say
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={5} key={index}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                <Box>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography variant="body2">{testimonial.statement}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
