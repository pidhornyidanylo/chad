import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import ChadLogo from '/public/icons/ChadLogo.svg';
import Check from '/public/icons/Check.svg';
import { LoadingButton } from '@mui/lab';
import Progress from '@/components/Progress/Progress';
import { connectStoreStepListData } from '../../data';

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
      <Box
        sx={{
          display: 'none',
          '@media(max-width: 1200px)': {
            display: 'block',
          },
        }}
      >
        <Progress />
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
      <Stack sx={stackStyles}>
        {connectStoreStepListData.map((listItem) => (
          <Paper sx={paperStyles} key={listItem.title}>
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
        sx={loadingButtonStyles}
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
          sx={dontUseShopifyButtonStyles}
        >
          I don&apos;t use Shopify
        </Button>
      </Typography>
    </>
  );
};

export default BasicForm;

const loadingButtonStyles = {
  fontWeight: 300,
  textTransform: 'none',
  borderRadius: '8px',
  marginTop: '32px',
  padding: '11px 0',
  backgroundColor: 'var(--main-blue-light)',
};

const dontUseShopifyButtonStyles = {
  textTransform: 'none',
  textDecoration: 'none',
  color: 'var(--typography-blue-dark)',
  '&:hover': {
    backgroundColor: 'transparent',
  },
};

const paperStyles = {
  border: 'none',
  boxShadow: 'none',
  display: 'flex',
  gap: '8px',
  backgroundColor: 'inherit',
};

const stackStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '32px',
  '@media (max-width: 576px)': {
    backgroundColor: '#F8F9FC',
    padding: 2,
  },
};
