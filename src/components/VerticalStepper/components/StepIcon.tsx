import React, { useContext } from 'react';
import ProgressIcon from '/public/icons/Progress.svg';
import StoreExistsIcon from '/public/icons/StoreExists.svg';
import { FormContext } from '@/store/FormContext/FormContext';
import CircleIconWrapper from './CircleIconWrapper';
import ImageIcon from './ImageIcon';

type StepIconProps = {
  index: number;
  storeInitExists: boolean;
};

const StepIcon: React.FC<StepIconProps> = ({
  index,
  storeInitExists,
}: StepIconProps) => {
  const { currentStep, submittedForms } = useContext(FormContext);

  const renderIcon = () => {
    if (storeInitExists && index === 1 && currentStep < submittedForms) {
      return (
        <ImageIcon
          exists={storeInitExists}
          src={currentStep < 2 ? StoreExistsIcon : ProgressIcon}
        />
      );
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
