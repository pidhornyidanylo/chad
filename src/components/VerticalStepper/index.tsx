'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Progress from '/public/icons/Progress.svg';
import NextIcon from '/public/icons/Next.svg';
import CircleIcon from '@mui/icons-material/Circle';
import { useContext } from 'react';
import {
  CustomStepConnector,
  stepLabelStyles,
  stepStyles,
  buttonStyles,
} from './styles';
import { FormContext } from '@/store/FormContext';

const steps = [
  'Welcome',
  'Connect your Shopify store',
  'Connect your customer support email',
  'Done',
];

const StepIcon = ({
  index,
  activeStep,
}: {
  index: number;
  activeStep: number;
}) => (
  <Box sx={{ position: 'relative', width: '32px', height: '32px' }}>
    <CircleIcon
      sx={{
        position: 'absolute',
        width: '32px',
        height: '32px',
        color: 'transparent',
        border:
          index <= activeStep
            ? '2px solid var(--main-blue-light)'
            : '2px solid var(--main-blue-faded)',
        borderRadius: '50%',
      }}
    />
    {index < activeStep && (
      <Image
        width={24}
        height={24}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        src={Progress}
        alt={'progress-icon'}
      />
    )}
  </Box>
);

const VerticalStepper = () => {
  const { currentStep, prevStep, nextStep } = useContext(FormContext);

  const handleNext = () => nextStep();
  const handleBack = () => prevStep();

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
                <StepIcon index={index} activeStep={currentStep} />
              )}
              sx={stepLabelStyles(index < currentStep)}
            >
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={buttonStyles.buttonContainer}>
        <Button
          disabled={currentStep === 0}
          onClick={handleBack}
          sx={buttonStyles.button('back')}
        >
          <Image
            style={buttonStyles.buttonIcon}
            width={12}
            height={12}
            src={NextIcon}
            alt={'back-icon'}
          />
          Back
        </Button>
        <Button
          disabled={currentStep === 4}
          onClick={handleNext}
          sx={buttonStyles.button('next')}
        >
          Next
          <Image width={12} height={12} src={NextIcon} alt={'next-icon'} />
        </Button>
      </Box>
    </Box>
  );
};

export default VerticalStepper;
