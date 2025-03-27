import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const InstructorPortal: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Instructor Portal
          </Typography>
          <Typography variant="body1">
            Welcome to the Instructor Portal. Here you can manage your courses and students.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default InstructorPortal; 