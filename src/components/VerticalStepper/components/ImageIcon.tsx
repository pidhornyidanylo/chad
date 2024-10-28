import React, { useContext } from 'react';
import Image from 'next/image';
import { FormContext } from '@/store/FormContext/FormContext';
import { Box } from '@mui/material';

type ImageIconProps = {
  src: string;
  large?: boolean;
  exists?: boolean;
};

const ImageIcon: React.FC<ImageIconProps> = ({
  src,
  large = false,
  exists,
}: ImageIconProps) => {
  const { currentStep } = useContext(FormContext);
  return (
    <>
      {large ? (
        <Image
          src={src}
          alt='progress-icon'
          width={32}
          height={32}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ) : (
        <Box
          sx={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: exists
              ? currentStep < 2
                ? '2px solid var(--main-blue-faded)'
                : '5px solid var(--main-blue-light)'
              : '2px solid var(--main-blue-light)',
          }}
        >
          <Image
            src={src}
            alt='progress-icon'
            width={24}
            height={24}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
      )}
    </>
  );
};

export default ImageIcon;
