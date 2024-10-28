import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h3'>Not Found</Typography>
      <Typography variant='h5'>
        Take me{' '}
        <Button variant='outlined'>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} href={'/'}>
            back
          </Link>
        </Button>
      </Typography>
    </Box>
  );
};

export default NotFound;
