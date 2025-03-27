import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const StudentPortal: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Student Portal
          </Typography>
          <Typography variant="body1">
            Welcome to the Student Portal. Here you can view your courses, schedules, and progress.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default StudentPortal; 