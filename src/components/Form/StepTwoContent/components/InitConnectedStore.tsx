import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import ProgressStore from '/public/icons/SuccessStoreProgress.svg';
import ConnectedIcon from '/public/icons/DisplayPicture.svg';
import { useContext } from 'react';
import { FormContext } from '@/store/FormContext/FormContext';

export const InitiallyConnectedStore = () => {
  const { nextStep } = useContext(FormContext);
  return (
    <>
      <Box sx={boxContainerStyles}>
        <Box sx={{ position: 'relative' }}>
          <Image
            width={24}
            height={24}
            src={ProgressStore}
            alt={'success-icon'}
            style={{ position: 'absolute', right: '0' }}
          />
          <Image
            width={80}
            height={80}
            src={ConnectedIcon}
            alt={'connected-icon'}
          />
        </Box>
      </Box>
      <Typography
        variant='h5'
        sx={{ color: '#20496C', fontWeight: 500, textAlign: 'center' }}
      >
        EXISTS STORE <br /> already connected
      </Typography>
      <Button
        onClick={() => nextStep()}
        variant='contained'
        fullWidth
        sx={continueButtonStyles}
      >
        Continue
      </Button>
      <Typography sx={typoBody2Styles} variant='body2'>
        Not your store?{' '}
        <Button sx={{ textTransform: 'none', color: '#32ABF2' }}>
          Connect another one
        </Button>
      </Typography>
    </>
  );
};

const boxContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '80px',
  marginBottom: '32px',
};

const continueButtonStyles = {
  fontWeight: 300,
  textTransform: 'none',
  borderRadius: '8px',
  marginTop: '32px',
  padding: '11px 0',
  backgroundColor: 'var(--main-blue-light)',
};

const typoBody2Styles = {
  fontWeight: 300,
  textTransform: 'none',
  marginTop: '16px',
  textAlign: 'center',
};
