import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import ChadLogo from '/public/icons/ChadLogo.svg';
import Check from '/public/icons/Check.svg';
import Google from '/public/icons/google.svg';
import Progress from '@/components/Progress/Progress';
import { connectCustomerSupportStepListData } from '../data';
import { LoadingButton } from '@mui/lab';

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
          '@media(max-width: 1200px)': {
            display: 'block',
          },
        }}
      >
        <Progress />
      </Box>
      <Typography sx={typoH5Styles} variant='h5'>
        Connect your customer support email
      </Typography>
      <Typography sx={typoBody2Styles} variant='body2'>
        Allows Chad to send automated responses on your behalf from your usual
        support mailbox
      </Typography>
      <Stack sx={stackStyles}>
        {connectCustomerSupportStepListData.map((listItem) => (
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
        fullWidth
        sx={loadingButtonStyles}
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

export default BasicForm;

const typoH5Styles = {
  marginTop: '24px',
  color: '#20496C',
  fontWeight: 500,
};

const typoBody2Styles = {
  marginTop: '16px',
  color: '#20496C',
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

const paperStyles = {
  border: 'none',
  boxShadow: 'none',
  display: 'flex',
  gap: '8px',
  backgroundColor: 'inherit',
};

const loadingButtonStyles = {
  fontWeight: 300,
  height: '50px',
  textTransform: 'none',
  marginTop: '32px',
  padding: '11px 0',
  color: '#fff',
  backgroundColor: '#5383EC',
  position: 'relative',
};
