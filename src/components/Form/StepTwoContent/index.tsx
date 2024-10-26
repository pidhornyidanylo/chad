import Image from 'next/image';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import ChadLogo from '/public/icons/ChadLogo.svg';
import Link from 'next/link';
import Check from '/public/icons/Check.svg';

const connectStoreStepListData = [
  {
    title: 'Track orders and shipping',
    subtitle: 'Global coverage with 600+ couriers supported',
  },
  {
    title: 'Manage orders',
    subtitle:
      'Allow customers to track, return, exchange, or report problems with their orders',
  },
  {
    title: 'Process returns and exchanges',
    subtitle:
      'Automatically checks your store policy and existing inventory before resolving or escalating each request',
  },
];

export function StepTwoContent() {
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
        Connect your Shopify store
      </Typography>
      <Typography sx={{ marginTop: '16px', color: '#20496C' }} variant='body2'>
        Installs the Chad widget in your Shopify store and sets it up to display
        your customers’ order information and self-serve options.
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '32px',
        }}
      >
        {connectStoreStepListData.map((listItem) => (
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
              alt={'check-icon'}
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
      <Button
        variant='contained'
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
        Connect store
      </Button>
      <Typography
        sx={{
          marginTop: '16px',
          textAlign: 'center',
          fontWeight: 300,
        }}
        variant='body2'
      >
        <Link
          style={{
            textDecoration: 'none',
            color: 'var(--typography-blue-dark)',
          }}
          href={'/'}
        >
          I don&apos;t use Shopify
        </Link>
      </Typography>
    </>
  );
}
