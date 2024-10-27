import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { FormContext } from '@/store/FormContext';

const Progress = () => {
  const { currentStep, submittedForms, nextStep, prevStep } =
    useContext(FormContext);
  const [activeStep, setActiveStep] = useState(currentStep);
  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    nextStep();
  };

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    prevStep();
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        mt: 3,
      }}
    >
      <Typography
        variant='body2'
        sx={{ mb: 0.7, color: 'var(--typography-blue-dark)' }}
      >
        Step {activeStep + 1} of 4
      </Typography>
      <MobileStepper
        variant='progress'
        steps={4}
        position='static'
        activeStep={activeStep}
        sx={{
          padding: 0,
          width: '100%',
          bgcolor: 'transparent',
          '& .MuiMobileStepper-progress': {
            width: '100%',
            backgroundColor: 'transparent',
            border: '1px solid #C9D3E0',
            borderRadius: '4px',
            height: '8px',
          },
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#C9D3E0',
            borderRadius: '4px',
          },
        }}
        backButton={null}
        nextButton={null}
      />
      {submittedForms > 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: 400,
            mt: 1,
          }}
        >
          <Button
            size='small'
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ color: 'var(--typography-blue-dark)' }}
          >
            Prev
          </Button>
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === 2 || activeStep >= submittedForms}
            sx={{ color: 'var(--typography-blue-dark)' }}
          >
            Next
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Progress;
