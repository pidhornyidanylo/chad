'use client';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import ChadLogo from '/public/icons/ChadLogo.svg';
import { useState } from 'react';
import Image from 'next/image';

type AlternativeRequestProps = {
  toggleShowAlternative: () => void;
  handleSuccessForm: (value: boolean) => void;
  initialState: string;
  values: string[];
  template: string;
  platform: string;
};

const AlternativeRequest = ({
  handleSuccessForm,
  toggleShowAlternative,
  initialState,
  values,
  template,
  platform,
}: AlternativeRequestProps) => {
  const [state, setState] = useState(initialState);
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };
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
        Don&apos;t use {platform}?
      </Typography>
      <Typography sx={{ marginTop: '16px', color: '#20496C' }} variant='body2'>
        {template}
      </Typography>
      <Typography
        sx={{
          marginTop: '36px',
          marginBottom: '8px',
          color: '#20496C',
        }}
        variant='subtitle1'
      >
        Platform
      </Typography>
      <FormControl fullWidth>
        <Select
          sx={{ backgroundColor: '#F8F9FC', border: 'none' }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={state}
          onChange={handleChange}
        >
          {values.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant='contained'
        onClick={() => handleSuccessForm(true)}
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
        Submit
      </Button>
      <Typography
        sx={{
          fontWeight: 300,
          textTransform: 'none',
          marginTop: '16px',
          textAlign: 'center',
          color: 'var(--typography-blue-dark)',
        }}
        variant='body2'
      >
        Actually use {platform}?
        <Button
          onClick={() => toggleShowAlternative()}
          sx={{ textTransform: 'none', color: '#32ABF2' }}
        >
          Connect
        </Button>
      </Typography>
    </>
  );
};

export default AlternativeRequest;
