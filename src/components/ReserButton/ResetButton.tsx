'use client';
import { Button } from '@mui/material';
import React from 'react';

export const reset = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('currentStep');
    sessionStorage.removeItem('submittedForms');
    sessionStorage.removeItem('storeConnected');
    sessionStorage.removeItem('storeInitExists');
  }
};

const ResetButton = () => {
  const handleFormReset = () => {
    reset();
    window.location.reload();
  };
  return (
    <Button
      onClick={() => handleFormReset()}
      variant='outlined'
      sx={{ position: 'fixed', top: '10px', right: '10px' }}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
