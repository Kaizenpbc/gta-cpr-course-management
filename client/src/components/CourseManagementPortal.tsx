import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const CourseManagementPortal: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Course Management Portal
          </Typography>
          <Typography variant="body1">
            Welcome to the Course Management Portal. Here you can manage course content, schedules, and materials.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default CourseManagementPortal; 