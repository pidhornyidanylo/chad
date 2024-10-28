'use client';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useContext } from 'react';
import { FormContext } from '@/store/FormContext/FormContext';
import {
  CustomStepConnector,
  stepStyles,
  buttonStyles,
  stepLabelStyles,
} from './styles';
import NextIcon from '/public/icons/Next.svg';
import StepIcon from './components/StepIcon';

const steps = [
  'Welcome',
  'Connect your Shopify store',
  'Connect your customer support email',
  'Done',
];

const VerticalStepper: React.FC = () => {
  const { currentStep, prevStep, nextStep, submittedForms, storeInitExists } =
    useContext(FormContext);

  return (
    <Box sx={{ maxWidth: 364 }}>
      <Stepper
        activeStep={currentStep}
        orientation='vertical'
        connector={<CustomStepConnector />}
      >
        {steps.map((step, index) => (
          <Step sx={stepStyles} key={step}>
            <StepLabel
              StepIconComponent={() => (
                <StepIcon storeInitExists={storeInitExists} index={index} />
              )}
              sx={stepLabelStyles}
            >
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={buttonStyles.buttonContainer}>
        <Button
          disabled={currentStep === 0}
          onClick={prevStep}
          sx={buttonStyles.button('back')}
        >
          <Image
            width={12}
            height={12}
            style={{ transform: 'rotate(180deg)' }}
            src={NextIcon}
            alt='back-icon'
          />
          Back
        </Button>
        <Button
          disabled={currentStep >= submittedForms}
          onClick={nextStep}
          sx={buttonStyles.button('next')}
        >
          Next
          <Image width={12} height={12} src={NextIcon} alt='next-icon' />
        </Button>
      </Box>
    </Box>
  );
};

export default VerticalStepper;
