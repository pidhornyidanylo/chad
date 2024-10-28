import { FieldErrors, UseFormRegister } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import ChadLogo from '/public/icons/ChadLogo.svg';
import { FormContext } from '@/store/FormContext/FormContext';
import { useContext } from 'react';
import CustomPasswordInput from './components/CustomPasswordInput';
import CustomFormControl from './components/CustomFormControl';
import Progress from '@/components/Progress/Progress';

export type FormValues = {
  email: string;
  yourName: string;
  password: string;
};

type StepOneContentProps = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  showPassword: boolean;
  showLoading: boolean;
  onPasswordToggle: () => void;
};

export const StepOneContent: React.FC<StepOneContentProps> = ({
  register,
  errors,
  showPassword,
  onPasswordToggle,
  showLoading,
}: StepOneContentProps) => {
  const { nextStep, submittedForms } = useContext(FormContext);
  return (
    <>
      <Box
        sx={{
          transition: 'all .2s ease',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
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
        Welcome to Chad
      </Typography>
      <Typography sx={{ marginTop: '16px', color: '#20496C' }} variant='body2'>
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </Typography>

      <Box sx={componentsContainerBoxStyles}>
        <CustomFormControl
          placeholder='megachad@trychad.com'
          label='Email'
          id='email'
          register={register}
          error={errors.email?.message}
        />
        <CustomFormControl
          label='Your name'
          id='yourName'
          register={register}
          error={errors.yourName?.message}
          placeholder={'Mega Chad'}
        />
        <CustomPasswordInput
          placeholder={'Enter password'}
          label='Password'
          id='password'
          register={register}
          error={errors.password?.message}
          showPassword={showPassword}
          onToggleShowPassword={onPasswordToggle}
        />
      </Box>
      <LoadingButton
        loading={showLoading}
        type='submit'
        onClick={() => {
          if (submittedForms > 0) {
            nextStep();
          }
        }}
        variant='contained'
        fullWidth
        sx={loadingButtonStyles}
      >
        {submittedForms > 0 ? 'Continue' : 'Create account'}
      </LoadingButton>
      <Typography sx={typoBody2Styles} variant='body2'>
        Already have an account?{' '}
        <Button sx={{ textTransform: 'none', color: '#32ABF2' }}>Login</Button>
      </Typography>
    </>
  );
};

const componentsContainerBoxStyles = {
  marginTop: '42px',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
};

const typoBody2Styles = {
  fontWeight: 300,
  textTransform: 'none',
  marginTop: '16px',
  textAlign: 'center',
  color: 'var(--typography-blue-dark)',
};

const loadingButtonStyles = {
  fontWeight: 300,
  textTransform: 'none',
  borderRadius: '8px',
  marginTop: '52px',
  padding: '11px 0',
  backgroundColor: 'var(--main-blue-light)',
};
