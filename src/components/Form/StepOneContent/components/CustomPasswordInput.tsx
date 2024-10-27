import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '..';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type CustomPasswordInputProps = {
  label: string;
  placeholder: string;
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error: string | undefined;
  showPassword: boolean;
  onToggleShowPassword: () => void;
};

export const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({
  label,
  id,
  register,
  error,
  showPassword,
  placeholder,
  onToggleShowPassword,
}: CustomPasswordInputProps) => {
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
        placeholder={placeholder}
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
            '@media (max-width: 576px)': {
              bottom: '-20px',
            },
          }}
          variant='caption'
        >
          {error}
        </Typography>
      )}
    </FormControl>
  );
};
