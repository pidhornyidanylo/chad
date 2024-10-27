import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import ChadLogo from '/public/icons/ChadLogo.svg';
import Check from '/public/icons/Check.svg';
import { LoadingButton } from '@mui/lab';
import { connectStoreStepListData } from '../data';
import SuccessForm from '../../reusable/SuccessForm';
import AlternativeRequest from '../../reusable/AlternativeRequest';

type InitNotConnectedStoreProps = {
  showLoading: boolean;
};

export const InitNotConnectedStore: React.FC<InitNotConnectedStoreProps> = ({
  showLoading,
}: InitNotConnectedStoreProps) => {
  const [showAlternative, setShowAlternative] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(false);
  const toggleShowAlternative = () => {
    setShowAlternative(!showAlternative);
  };
  const handleSuccessForm = (value: boolean) => {
    setShowSuccessForm(value);
  };

  return (
    <>
      {showAlternative ? (
        <>
          {showSuccessForm ? (
            <SuccessForm handleSuccessForm={handleSuccessForm} />
          ) : (
            <AlternativeRequest
              toggleShowAlternative={toggleShowAlternative}
              handleSuccessForm={handleSuccessForm}
              initialState={'Platform-1'}
              values={['Platform-1', 'Platform-2', 'Platform-3']}
              template={
                'Chad Beta is currently only available on Shopify. We`ll send you an email when Chad becomes available on your platform.'
              }
              platform={'Shopify'}
            />
          )}
        </>
      ) : (
        <BasicForm
          showLoading={showLoading}
          toggleShowAlternative={toggleShowAlternative}
        />
      )}
    </>
  );
};

const BasicForm = ({
  toggleShowAlternative,
  showLoading,
}: {
  showLoading: boolean;
  toggleShowAlternative: () => void;
}) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Image width={32} height={32} src={ChadLogo} alt='logo' />
        <Typography sx={{ color: '#20496C', fontWeight: 600 }} variant='h4'>
          Chad
        </Typography>
      </Box>
      <Typography
        sx={{
          marginTop: '24px',
          color: '#20496C',
          fontWeight: 500,
        }}
        variant='h5'
      >
        Connect your Shopify store
      </Typography>
      <Typography sx={{ marginTop: '16px', color: '#20496C' }} variant='body2'>
        Installs the Chad widget in your Shopify store and sets it up to display
        your customers’ order information and self-serve options.
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '32px',
        }}
      >
        {connectStoreStepListData.map((listItem) => (
          <Paper
            sx={{
              border: 'none',
              boxShadow: 'none',
              display: 'flex',
              gap: '8px',
            }}
            key={listItem.title}
          >
            <Image
              style={{ marginTop: '7px' }}
              width={16}
              height={16}
              src={Check}
              alt='check-icon'
            />
            <Box>
              <Typography sx={{ fontWeight: 400 }} variant='subtitle1'>
                {listItem.title}
              </Typography>
              <Typography sx={{ fontWeight: 300 }} variant='subtitle2'>
                {listItem.subtitle}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
      <LoadingButton
        loading={showLoading}
        type='submit'
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
        Connect store
      </LoadingButton>
      <Typography
        sx={{
          marginTop: '16px',
          textAlign: 'center',
          fontWeight: 300,
        }}
        variant='body2'
      >
        <Button
          onClick={() => toggleShowAlternative()}
          variant='text'
          sx={{
            textTransform: 'none',
            textDecoration: 'none',
            color: 'var(--typography-blue-dark)',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          I don&apos;t use Shopify
        </Button>
      </Typography>
    </>
  );
};
