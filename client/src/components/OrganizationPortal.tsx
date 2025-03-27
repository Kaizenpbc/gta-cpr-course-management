import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const OrganizationPortal: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Organization Portal
          </Typography>
          <Typography variant="body1">
            Welcome to the Organization Portal. Here you can manage your organization's courses, students, and instructors.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default OrganizationPortal; 