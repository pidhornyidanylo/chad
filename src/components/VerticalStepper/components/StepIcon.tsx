import React, { useContext } from 'react';
import Image from 'next/image';
import CircleIcon from '@mui/icons-material/Circle';
import ProgressIcon from '/public/icons/Progress.svg';
import StoreExistsIcon from '/public/icons/StoreExists.svg';
import { FormContext } from '@/store/FormContext/FormContext';
import { Box } from '@mui/material';

type StepIconProps = {
  index: number;
  storeInitExists: boolean;
};

const StepIcon: React.FC<StepIconProps> = ({ index, storeInitExists }) => {
  const { currentStep, submittedForms } = useContext(FormContext);

  const renderIcon = () => {
    if (storeInitExists && index === 1 && currentStep < submittedForms) {
      return <ImageIcon exists={storeInitExists} src={StoreExistsIcon} />;
    }
    if (index > currentStep) {
      return <CircleIconWrapper faded />;
    }
    return (
      <>
        {index < submittedForms ? (
          <ImageIcon src={ProgressIcon} large={index < currentStep} />
        ) : (
          <CircleIconWrapper light />
        )}
      </>
    );
  };

  return (
    <div style={{ position: 'relative', width: '32px', height: '32px' }}>
      {renderIcon()}
    </div>
  );
};

export default StepIcon;

const ImageIcon: React.FC<{
  src: string;
  large?: boolean;
  exists?: boolean;
}> = ({ src, large = false, exists }) => {
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
              ? '2px solid var(--main-blue-faded)'
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

const CircleIconWrapper: React.FC<{ faded?: boolean; light?: boolean }> = ({
  faded,
  light,
}) => (
  <CircleIcon
    sx={{
      position: 'absolute',
      width: '32px',
      height: '32px',
      color: 'transparent',
      border: `2px solid ${faded ? 'var(--main-blue-faded)' : light ? 'var(--main-blue-light)' : 'var(--main-blue)'}`,
      borderRadius: '50%',
    }}
  />
);
