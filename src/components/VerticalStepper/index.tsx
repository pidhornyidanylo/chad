'use client';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Progress from '/public/icons/Progress.svg';
import StoreExistsIcon from '/public/icons/StoreExists.svg';
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

type StepIconProps = {
  index: number;
  storeInitExists: boolean;
};

const StepIcon: React.FC<StepIconProps> = ({
  index,
  storeInitExists,
}: StepIconProps) => (
  <Box sx={{ position: 'relative', width: '32px', height: '32px' }}>
    {index < 4 && (
      <>
        {storeInitExists ? (
          <InitialStoreExists index={index} />
        ) : (
          <InitialStoreNotExist index={index} />
        )}
      </>
    )}
  </Box>
);

const InitialStoreExists = ({ index }: { index: number }) => {
  const { currentStep, submittedForms } = useContext(FormContext);
  return (
    <>
      {index === 1 && currentStep < submittedForms && (
        <IndexEqualsOneAndCurrentStepLessThenSubmittedForm />
      )}
      {index > currentStep ? (
        <IndexLessThenCurrentStep />
      ) : (
        <IndexMoreThenCurrentStep index={index} />
      )}
    </>
  );
};

const IndexEqualsOneAndCurrentStepLessThenSubmittedForm = () => (
  <Image
    width={23}
    height={23}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    src={StoreExistsIcon}
    alt={'StoreExistsIcon-icon'}
  />
);

const IndexLessThenCurrentStep = () => (
  <CircleIcon
    sx={{
      position: 'absolute',
      width: '32px',
      height: '32px',
      color: 'transparent',
      border: '2px solid var(--main-blue-faded)',
      borderRadius: '50%',
    }}
  />
);

const InitialStoreNotExist = ({ index }: { index: number }) => {
  const { currentStep, submittedForms } = useContext(FormContext);

  return (
    <>
      {index > currentStep ? (
        <CircleIcon
          sx={{
            position: 'absolute',
            width: '32px',
            height: '32px',
            color: 'transparent',
            border: '2px solid var(--main-blue-faded)',
            borderRadius: '50%',
          }}
        />
      ) : (
        <>
          {index < submittedForms ? (
            <>
              {index < currentStep ? (
                <Image
                  width={32}
                  height={32}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  src={Progress}
                  alt={'progress-icon'}
                />
              ) : (
                <>
                  <Image
                    width={23}
                    height={23}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    src={Progress}
                    alt={'progress-icon'}
                  />
                  <CircleIcon
                    sx={{
                      position: 'absolute',
                      width: '32px',
                      height: '32px',
                      color: 'transparent',
                      border: '2px solid var(--main-blue-light)',
                      borderRadius: '50%',
                    }}
                  />
                </>
              )}
            </>
          ) : (
            <CircleIcon
              sx={{
                position: 'absolute',
                width: '32px',
                height: '32px',
                color: 'transparent',
                border: '2px solid var(--main-blue-light)',
                borderRadius: '50%',
              }}
            />
          )}
        </>
      )}
    </>
  );
};

const IndexMoreThenCurrentStep = ({ index }: { index: number }) => {
  const { currentStep, submittedForms } = useContext(FormContext);

  return (
    <>
      {index < submittedForms ? (
        <>
          {index < currentStep ? (
            <Image
              width={32}
              height={32}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              src={Progress}
              alt={'progress-icon'}
            />
          ) : (
            <>
              <Image
                width={23}
                height={23}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                src={Progress}
                alt={'progress-icon'}
              />
              <CircleIcon
                sx={{
                  position: 'absolute',
                  width: '32px',
                  height: '32px',
                  color: 'transparent',
                  border: '2px solid var(--main-blue-light)',
                  borderRadius: '50%',
                }}
              />
            </>
          )}
        </>
      ) : (
        <CircleIcon
          sx={{
            position: 'absolute',
            width: '32px',
            height: '32px',
            color: 'transparent',
            border: '2px solid var(--main-blue-light)',
            borderRadius: '50%',
          }}
        />
      )}
    </>
  );
};

const VerticalStepper = () => {
  const { currentStep, prevStep, nextStep, submittedForms, storeInitExists } =
    useContext(FormContext);

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
                <StepIcon storeInitExists={storeInitExists} index={index} />
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
          disabled={currentStep >= submittedForms}
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
