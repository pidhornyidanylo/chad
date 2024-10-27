'use client';
import { reset } from '@/components/ReserButton/ResetButton';
import { Typography } from '@mui/material';
import React, { useEffect } from 'react';

const Greeting = () => {
  useEffect(() => {
    reset();
  }, []);
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h3' sx={{ fontSize: '2em', textAlign: 'center' }}>
        Hello Luna Edge, My name is Danylo!{' '}
      </Typography>
    </div>
  );
};

export default Greeting;
