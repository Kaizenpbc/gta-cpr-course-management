import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const SysAdminPortal: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            System Administration Portal
          </Typography>
          <Typography variant="body1">
            Welcome to the System Administration Portal. Here you can manage system settings, user permissions, and system maintenance.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default SysAdminPortal; 