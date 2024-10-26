import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import Image from 'next/image';
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material';
import ChadLogo from '/public/icons/ChadLogo.svg';
import Link from 'next/link';
import { FormContext } from '@/store/FormContext';
import { useContext } from 'react';

type FormValues = {
  email: string;
  yourName: string;
  password: string;
};

export function StepOneContent({
  register,
  errors,
  showPassword,
  onPasswordToggle,
  showContinue,
  showLoading,
}: {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  showPassword: boolean;
  showContinue: boolean;
  showLoading: boolean;
  onPasswordToggle: () => void;
}) {
  const { nextStep } = useContext(FormContext);
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
        Welcome to Chad
      </Typography>
      <Typography sx={{ marginTop: '16px', color: '#20496C' }} variant='body2'>
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </Typography>

      <Box
        sx={{
          marginTop: '42px',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}
      >
        <CustomFormControl
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
        />
        <CustomPasswordInput
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
          if (showContinue) {
            nextStep();
          }
        }}
        variant='contained'
        fullWidth
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          borderRadius: '8px',
          marginTop: '52px',
          padding: '11px 0',
          backgroundColor: 'var(--main-blue-light)',
        }}
      >
        {showContinue ? 'Continue' : 'Create account'}
      </LoadingButton>
      <Typography
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          marginTop: '16px',
          textAlign: 'center',
        }}
        variant='body2'
      >
        Already have an account?{' '}
        <Link
          style={{ textDecoration: 'none', color: 'var(--main-blue-light)' }}
          href={'/'}
        >
          Login
        </Link>
      </Typography>
    </>
  );
}

function CustomFormControl({
  label,
  id,
  register,
  error,
}: {
  label: string;
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error: string | undefined;
}) {
  return (
    <FormControl sx={{ position: 'relative' }} fullWidth variant='standard'>
      <InputLabel
        sx={{
          top: '-10px',
          fontSize: '1.2em',
          color: 'var(--typography-blue-dark)',
        }}
        htmlFor={id}
        shrink
      >
        {label}
      </InputLabel>
      <Input
        disableUnderline
        sx={{
          fontSize: '1.2em',
          color: 'var(--typography-blue-dark)',
          backgroundColor: '#F8F9FC',
          padding: '10px  10px 10px 17px',
          borderRadius: '4px',
        }}
        fullWidth
        id={id}
        {...register(id)}
      />
      {error && (
        <Typography
          sx={{
            position: 'absolute',
            bottom: '-30px',
            color: 'red',
          }}
          variant='caption'
        >
          {error}
        </Typography>
      )}
    </FormControl>
  );
}

function CustomPasswordInput({
  label,
  id,
  register,
  error,
  showPassword,
  onToggleShowPassword,
}: {
  label: string;
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error: string | undefined;
  showPassword: boolean;
  onToggleShowPassword: () => void;
}) {
  return (
    <FormControl sx={{ position: 'relative' }} fullWidth variant='standard'>
      <InputLabel
        sx={{
          top: '-10px',
          fontSize: '1.2em',
          color: 'var(--typography-blue-dark)',
          marginBottom: '8px',
        }}
        htmlFor={id}
        shrink
      >
        {label}
      </InputLabel>
      <Input
        disableUnderline
        fullWidth
        id={id}
        sx={{
          fontSize: '1.2em',
          color: 'var(--typography-blue-dark)',
          backgroundColor: '#F8F9FC',
          padding: '10px  10px 10px 17px',
          borderRadius: '4px',
        }}
        type={showPassword ? 'text' : 'password'}
        {...register(id)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={onToggleShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error && (
        <Typography
          sx={{
            position: 'absolute',
            bottom: '-30px',
            color: 'red',
          }}
          variant='caption'
        >
          {error}
        </Typography>
      )}
    </FormControl>
  );
}
