'use client';
import { Button, IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
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
    <>
      <Button
        onClick={() => handleFormReset()}
        variant='outlined'
        sx={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          '@media (max-width: 576px)': {
            display: 'none',
          },
        }}
      >
        Reset
      </Button>
      <IconButton
        color='primary'
        aria-label='reload'
        onClick={() => handleFormReset()}
        sx={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          '@media (min-width: 576px)': {
            display: 'none',
          },
        }}
      >
        <ReplayIcon />
      </IconButton>
    </>
  );
};

export default ResetButton;
