import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Have questions or need more information? Reach out to us.
      </Typography>

      {/* Contact Form */}
      <Box sx={{ mt: 3 }}>
        <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} sx={{ mb: 2 }} />
        <Button variant="contained" color="primary">Send Message</Button>
      </Box>

      {/* Contact Information */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2">Email: contact@icswkerala.org</Typography>
        <Typography variant="body2">Phone: +91 12345 67890</Typography>
        <Typography variant="body2">Address: 123 Street, Kerala, India</Typography>
      </Box>
    </Box>
  );
};

export default ContactPage;
