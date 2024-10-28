import { useEffect, useState } from 'react';
import { FieldErrors } from 'react-hook-form';
import { FormValues } from '../StepOneContent';
import toast from 'react-hot-toast';
import SuccessForm from '../reusable/SuccessForm';
import AlternativeRequest from '../reusable/AlternativeRequest';
import BasicForm from './components/BasicForm';

type StepThreeContentProps = {
  showLoading: boolean;
  errors: FieldErrors<FormValues>;
};

export const StepThreeContent: React.FC<StepThreeContentProps> = ({
  showLoading,
  errors,
}: StepThreeContentProps) => {
  useEffect(() => {
    if (errors.email?.message || errors.password?.message) {
      toast.error(
        'Please reset the form or re-enter your information to move forward.'
      );
    }
  }, [errors]);

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
              initialState={'Mail-1'}
              values={['Mail-1', 'Mail-2', 'Mail-3']}
              template={
                'Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform.'
              }
              platform={'Gmail'}
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
