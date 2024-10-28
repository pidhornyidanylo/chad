import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { FormContext } from '@/store/FormContext/FormContext';

const Progress = () => {
  const { currentStep, submittedForms, nextStep, prevStep } =
    useContext(FormContext);
  const handleNext = () => {
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <Box sx={containerBoxStyles}>
      <Typography
        variant='body2'
        sx={{ mb: 0.7, color: 'var(--typography-blue-dark)' }}
      >
        Step {currentStep + 1} of 4
      </Typography>
      <MobileStepper
        variant='progress'
        steps={4}
        position='static'
        activeStep={currentStep}
        sx={mobileStepperStyles}
        backButton={null}
        nextButton={null}
      />
      {submittedForms > 0 ? (
        <Box sx={buttonsBoxContainerStyles}>
          <Button
            size='small'
            onClick={handleBack}
            disabled={currentStep === 0}
            sx={{ color: 'var(--typography-blue-dark)' }}
          >
            Prev
          </Button>
          <Button
            size='small'
            onClick={handleNext}
            disabled={currentStep === 2 || currentStep >= submittedForms}
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

const containerBoxStyles = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  mt: 3,
};

const mobileStepperStyles = {
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
};

const buttonsBoxContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 400,
  mt: 1,
};
