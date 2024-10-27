import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConnectedIcon from '/public/icons/DisplayPicture.svg';
import ProgressStore from '/public/icons/SuccessStoreProgress.svg';
import { FormContext } from '@/store/FormContext';

const ManuallyConnectedStore = () => {
  const { nextStep } = useContext(FormContext);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '80px',
          marginBottom: '32px',
        }}
      >
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
        Store connected
      </Typography>
      <Typography
        sx={{
          marginTop: '16px',
          color: '#20496C',
          textAlign: 'center',
        }}
        variant='body2'
      >
        Chad is now able to manage customer support requests for [STORE-NAME].
      </Typography>
      <Button
        onClick={() => nextStep()}
        variant='contained'
        fullWidth
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          borderRadius: '8px',
          marginTop: '32px',
          padding: '11px 0',
          backgroundColor: 'var(--main-blue-light)',
        }}
      >
        Continue
      </Button>
      <Typography
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          marginTop: '16px',
          textAlign: 'center',
        }}
        variant='body2'
      >
        Wrong store?{' '}
        <Link
          style={{
            textDecoration: 'none',
            color: 'var(--main-blue-light)',
          }}
          href={'/'}
        >
          Connect another one
        </Link>
      </Typography>
    </>
  );
};

export default ManuallyConnectedStore;
