'use client';
import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import { Box, Typography } from '@mui/material';

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const totalSteps = 5;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ position: 'absolute', bottom: '56px', maxWidth: 400, flexGrow: 1 }}
    >
      <Box
        sx={{
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
          backgroundColor: '#134267',
          marginBottom: '16px',
        }}
      >
        <Box sx={{ color: '#96CAF7', fontSize: '2em' }}>{activeStep + 1}X</Box>
        <Typography sx={{ color: '#96CAF7' }}>
          Acquiring a new customer is {activeStep + 1}x more costly than making
          an unhappy customer happy
        </Typography>
      </Box>
      <MobileStepper
        variant='dots'
        steps={totalSteps}
        position='static'
        activeStep={activeStep}
        sx={{ display: 'none' }}
        backButton={undefined}
        nextButton={undefined}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <Box
            key={index}
            onClick={() => handleStepChange(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: activeStep === index ? '#96CAF7' : '#134267',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalStepper;
