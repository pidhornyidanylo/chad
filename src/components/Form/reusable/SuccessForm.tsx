import Image from 'next/image';
import CheckMark from '/public/icons/CheckMark.svg';
import { Button, Typography } from '@mui/material';

type SuccessFormProps = {
  handleSuccessForm: (value: boolean) => void;
};

const SuccessForm: React.FC<SuccessFormProps> = ({
  handleSuccessForm,
}: SuccessFormProps) => {
  return (
    <>
      <Image
        style={{ display: 'block', margin: '0 auto' }}
        src={CheckMark}
        alt={'check-mark'}
      />
      <Typography
        sx={{
          marginTop: '24px',
          color: '#20496C',
          fontWeight: 500,
          textAlign: 'center',
          '@media (max-width: 576px)': {
            marginTop: '12px',
          },
        }}
        variant='h5'
      >
        Response received
      </Typography>
      <Typography
        sx={{
          marginTop: '16px',
          color: '#20496C',
          textAlign: 'center',
        }}
        variant='body2'
      >
        Thank you for your interest in Chad! We’ll be hard at work building
        integrations to support your platform.
      </Typography>
      <Button
        variant='contained'
        onClick={() => handleSuccessForm(false)}
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
        Done
      </Button>
    </>
  );
};

export default SuccessForm;
