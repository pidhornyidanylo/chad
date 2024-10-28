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

const CustomFormControl: React.FC<CustomFormControlProps> = ({
  label,
  placeholder,
  id,
  register,
  error,
}: CustomFormControlProps) => {
  return (
    <FormControl sx={{ position: 'relative' }} fullWidth variant='standard'>
      <InputLabel sx={inputLabelStyles} htmlFor={id} shrink>
        {label}
      </InputLabel>
      <Input
        placeholder={placeholder}
        disableUnderline
        sx={inputStyles}
        fullWidth
        id={id}
        {...register(id)}
      />
      {error && (
        <Typography sx={typoErrorStyles} variant='caption'>
          {error}
        </Typography>
      )}
    </FormControl>
  );
};

export default CustomFormControl;

const inputLabelStyles = {
  top: '-10px',
  fontSize: '1.2em',
  color: 'var(--typography-blue-dark)',
};

const inputStyles = {
  fontSize: '1.2em',
  color: 'var(--typography-blue-dark)',
  backgroundColor: '#F8F9FC',
  padding: '10px  10px 10px 17px',
  borderRadius: '4px',
};

const typoErrorStyles = {
  position: 'absolute',
  bottom: '-30px',
  color: 'red',
};
