import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import Check from '/public/icons/Check.svg';
import ChadLogo from '/public/icons/ChadLogo.svg';
import Google from '/public/icons/google.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { connectCustomerSupportStepListData } from './data';
import { LoadingButton } from '@mui/lab';
import { FieldErrors } from 'react-hook-form';
import { FormValues } from '../StepOneContent';
import toast from 'react-hot-toast';
import SuccessForm from '../reusable/SuccessForm';
import AlternativeRequest from '../reusable/AlternativeRequest';
import Progress from '@/components/Progress/Progress';

type StepThreeContentProps = {
  showLoading: boolean;
  errors: FieldErrors<FormValues>;
};

export const StepThreeContent: React.FC<StepThreeContentProps> = ({
  showLoading,
  errors,
}: StepThreeContentProps) => {
  useEffect(() => {
    if (errors.email?.message || errors.password?.message) {
      toast.error('Form reset is required.');
    }
  }, [errors]);

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
              initialState={'Mail-1'}
              values={['Mail-1', 'Mail-2', 'Mail-3']}
              template={
                'Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform.'
              }
              platform={'Gmail'}
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

type BasicFormProps = {
  showLoading: boolean;
  toggleShowAlternative: () => void;
};

const BasicForm: React.FC<BasicFormProps> = ({
  showLoading,
  toggleShowAlternative,
}: BasicFormProps) => {
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
          '@media(max-width: 576px)': {
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
        Connect your customer support email
      </Typography>
      <Typography sx={{ marginTop: '16px', color: '#20496C' }} variant='body2'>
        Allows Chad to send automated responses on your behalf from your usual
        support mailbox
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '32px',
        }}
      >
        {connectCustomerSupportStepListData.map((listItem) => (
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
        fullWidth
        sx={{
          fontWeight: 300,
          height: '50px',
          textTransform: 'none',
          marginTop: '32px',
          padding: '11px 0',
          color: '#fff',
          backgroundColor: '#5383EC',
          position: 'relative',
        }}
      >
        <Image
          style={{ position: 'absolute', left: 1, borderRadius: '3px' }}
          src={Google}
          alt={'google-icon'}
        />
        Connect Gmail account
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
          sx={{
            textTransform: 'none',
            color: 'var(--typography-blue-dark)',
          }}
        >
          I don&apos;t use Gmail
        </Button>
      </Typography>
    </>
  );
};
