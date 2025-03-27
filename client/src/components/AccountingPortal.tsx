import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const AccountingPortal: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Accounting Portal
          </Typography>
          <Typography variant="body1">
            Welcome to the Accounting Portal. Here you can manage invoices, payments, and financial reports.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AccountingPortal; 