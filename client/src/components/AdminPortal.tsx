import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const AdminPortal: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Admin Portal
          </Typography>
          <Typography variant="body1">
            Welcome to the Admin Portal. Here you can manage users, courses, and system settings.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AdminPortal; 