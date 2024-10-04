import React from 'react';
import {  Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        At ICSW Kerala Division, our mission is to empower communities through quality education, advocacy, and support. We believe in fostering an inclusive environment where everyone has access to the resources they need to succeed.
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body1" paragraph>
        Our vision is to be a leading organization in the field of education, creating a better future for our community through innovative programs and partnerships. We strive to create a world where education is accessible to all, regardless of background.
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom>
        History
      </Typography>
      <Typography variant="body1" paragraph>
        Founded in [Year], ICSW Kerala Division has been at the forefront of educational initiatives in Kerala. Over the years, we have expanded our reach and impact, serving thousands of individuals through various programs and services.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Our Team
      </Typography>
      <Typography variant="body1" paragraph>
        Our team is composed of dedicated professionals who are passionate about education and community service. Together, we work tirelessly to implement programs that benefit our members and the community at large. We believe in collaboration and strive to build strong partnerships with other organizations and stakeholders.
      </Typography>
      
      <Typography variant="h5" component="h2" gutterBottom>
        Get Involved
      </Typography>
      <Typography variant="body1" paragraph>
        If you share our vision and mission, we invite you to get involved! There are many ways to contribute, whether through volunteering, donating, or participating in our programs. Together, we can make a difference.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        For more information about our organization and programs, please reach out to us at <a href="mailto:contact@icswkerala.org">contact@icswkerala.org</a> or call us at +91-123-456-7890.
      </Typography>
    </Container>
  );
};

export default AboutUs;
