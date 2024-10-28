import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';

export const CustomStepConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'var(--main-blue-light)',
      minHeight: '48px',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'var(--main-blue-light)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: 'var(--main-blue-faded)',
    borderTopWidth: 3,
    borderLeftWidth: '2px',
    borderRadius: 0,
    minHeight: '48px',
    width: '250px',
    marginLeft: '3px',
  },
}));

export const stepLabelStyles = () => ({
  [`& .MuiStepLabel-label`]: {
    color: 'var(--main-blue-faded)',
    fontWeight: 'regular',
    fontSize: '1em',
    padding: 0,
    marginLeft: 0,
  },
  [`& .MuiStepLabel-label.Mui-active`]: {
    color: '#fff',
  },
  [`& .MuiStepLabel-label.Mui-completed`]: {
    color: '#fff',
  },
});

export const stepStyles = {
  [`& .MuiStepLabel-root`]: {
    padding: 0,
  },
  [`& .MuiStepContent-root`]: {
    marginTop: -1,
    paddingLeft: 0,
  },
};

export const buttonStyles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '48px',
  },
  button: (type: 'back' | 'next') => ({
    width: '84px',
    color: type === 'back' ? '#93A8C1 !important' : '#93A8C1 !important',
    backgroundColor: type === 'next' ? '#134267' : 'transparent',
    textTransform: 'none',
    padding: '6px 12px',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'regular',
    gap: '8px',
  }),
  buttonIcon: {
    transform: 'rotate(180deg)',
  },
};
