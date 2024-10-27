import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '..';
import { FormControl, Input, InputLabel, Typography } from '@mui/material';

type CustomFormControlProps = {
  label: string;
  placeholder: string;
  id: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error: string | undefined;
};

export const CustomFormControl: React.FC<CustomFormControlProps> = ({
  label,
  placeholder,
  id,
  register,
  error,
}: CustomFormControlProps) => {
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
        placeholder={placeholder}
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
};
