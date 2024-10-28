import React, { useState } from 'react';
import SuccessForm from '@/components/Form/reusable/SuccessForm';
import AlternativeRequest from '@/components/Form/reusable/AlternativeRequest';
import BasicForm from './BasicForm';

type InitNotConnectedStoreProps = {
  showLoading: boolean;
};

export const InitNotConnectedStore: React.FC<InitNotConnectedStoreProps> = ({
  showLoading,
}: InitNotConnectedStoreProps) => {
  const [showAlternative, setShowAlternative] = useState(false);
  const [showSuccessForm, setShowSuccessForm] = useState(false);
  const toggleShowAlternative = () => {
    setShowAlternative(!showAlternative);
  };
  const handleSuccessForm = (value: boolean) => {
    setShowSuccessForm(value);
  };

  return (
    <>
      {showAlternative ? (
        <>
          {showSuccessForm ? (
            <SuccessForm handleSuccessForm={handleSuccessForm} />
          ) : (
            <AlternativeRequest
              toggleShowAlternative={toggleShowAlternative}
              handleSuccessForm={handleSuccessForm}
              initialState={'Platform-1'}
              values={['Platform-1', 'Platform-2', 'Platform-3']}
              template={
                'Chad Beta is currently only available on Shopify. We`ll send you an email when Chad becomes available on your platform.'
              }
              platform={'Shopify'}
            />
          )}
        </>
      ) : (
        <BasicForm
          showLoading={showLoading}
          toggleShowAlternative={toggleShowAlternative}
        />
      )}
    </>
  );
};
