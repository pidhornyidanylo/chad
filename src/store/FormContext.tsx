'use client';
import { createContext, ReactElement, useEffect, useState } from 'react';

type FormContextT = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
};

export const FormContext = createContext<FormContextT>({
  currentStep: 0,
  nextStep: () => {},
  prevStep: () => {},
});

type FormContextProviderProps = {
  children?: JSX.Element | Array<JSX.Element>;
};

export const FormContextProvider = (
  props: FormContextProviderProps
): ReactElement => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const initialFormHandler = (): void => {
      if (isSessionStorageEmpty()) {
        sessionStorage.setItem('currentStep', `0`);
        setCurrentStep(0);
      } else {
        const storedCount: number = JSON.parse(
          sessionStorage.getItem('currentStep')!
        );
        setCurrentStep(storedCount);
      }
    };
    initialFormHandler();
  }, []);

  const isSessionStorageEmpty = (): boolean => {
    return !sessionStorage.getItem('currentStep');
  };

  const storedCount: number = JSON.parse(
    sessionStorage.getItem('currentStep')!
  );

  const nextStep = () => {
    sessionStorage.setItem('currentStep', JSON.stringify(storedCount + 1));
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    sessionStorage.setItem('currentStep', JSON.stringify(storedCount - 1));
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <FormContext.Provider value={{ currentStep, nextStep, prevStep }}>
      {props.children}
    </FormContext.Provider>
  );
};
