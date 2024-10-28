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
      <Typography sx={typoH5Styles} variant='h5'>
        Don&apos;t use {platform}?
      </Typography>
      <Typography sx={{ marginTop: '16px', color: '#20496C' }} variant='body2'>
        {template}
      </Typography>
      <Typography sx={typoSubtitle1Styles} variant='subtitle1'>
        Platform
      </Typography>
      <FormControl fullWidth>
        <Select
          sx={selectStyles}
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
        sx={submitButtonStyles}
      >
        Submit
      </Button>
      <Typography sx={typoBody2Styles} variant='body2'>
        Actually use {platform}?
        <Button
          onClick={() => toggleShowAlternative()}
          sx={connectButtonStyles}
        >
          Connect
        </Button>
      </Typography>
    </>
  );
};

export default AlternativeRequest;

const selectStyles = { backgroundColor: '#F8F9FC', border: 'none' };

const typoH5Styles = {
  marginTop: '24px',
  color: '#20496C',
  fontWeight: 500,
};

const typoBody2Styles = {
  fontWeight: 300,
  textTransform: 'none',
  marginTop: '16px',
  textAlign: 'center',
  color: 'var(--typography-blue-dark)',
};

const typoSubtitle1Styles = {
  marginTop: '36px',
  marginBottom: '8px',
  color: '#20496C',
};

const connectButtonStyles = {
  textTransform: 'none',
  color: '#32ABF2',
};

const submitButtonStyles = {
  fontWeight: 300,
  textTransform: 'none',
  borderRadius: '8px',
  marginTop: '32px',
  padding: '11px 0',
  backgroundColor: 'var(--main-blue-light)',
};
