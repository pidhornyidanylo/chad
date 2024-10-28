import { useContext } from 'react';
import { InitiallyConnectedStore } from './components/InitConnectedStore';
import ManuallyConnectedStore from './components/ManuallyConnectedStore';
import { FormContext } from '@/store/FormContext/FormContext';
import { InitNotConnectedStore } from './components/InitNotConnectedStore/InitNotConnectedStore';

type StepTwoContentProps = {
  showLoading: boolean;
};

export const StepTwoContent: React.FC<StepTwoContentProps> = ({
  showLoading,
}: StepTwoContentProps) => {
  const { storeConnected, storeInitExists } = useContext(FormContext);
  return (
    <>
      {storeInitExists ? (
        <InitiallyConnectedStore />
      ) : (
        <>
          {storeConnected ? (
            <ManuallyConnectedStore />
          ) : (
            <InitNotConnectedStore showLoading={showLoading} />
          )}
        </>
      )}
    </>
  );
};
