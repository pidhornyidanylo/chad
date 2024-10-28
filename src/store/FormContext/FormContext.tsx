'use client';
import { createContext, ReactElement, useEffect, useState } from 'react';

type FormContextT = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  submittedForms: number;
  addSubmittedForm: () => void;
  storeConnected: boolean;
  connectStore: () => void;
  storeInitExists: boolean;
  createInitialStore: () => void;
};

export const FormContext = createContext<FormContextT>({
  currentStep: 0,
  nextStep: () => {},
  prevStep: () => {},
  submittedForms: 0,
  addSubmittedForm: () => {},
  storeConnected: false,
  connectStore: () => {},
  storeInitExists: false,
  createInitialStore: () => {},
});

type FormContextProviderProps = {
  children?: JSX.Element | Array<JSX.Element>;
};

export const FormContextProvider = ({
  children,
}: FormContextProviderProps): ReactElement => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submittedForms, setSubmittedForms] = useState(0);
  const [storeConnected, setStoreConnected] = useState(false);
  const [storeInitExists, setStoreInitExists] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialFormHandler = (): void => {
        setCurrentStep(
          JSON.parse(sessionStorage.getItem('currentStep') || '0')
        );
        setSubmittedForms(
          JSON.parse(sessionStorage.getItem('submittedForms') || '0')
        );
        setStoreConnected(
          JSON.parse(sessionStorage.getItem('storeConnected') || 'false')
        );
        setStoreInitExists(
          JSON.parse(sessionStorage.getItem('storeInitExists') || 'false')
        );
      };
      initialFormHandler();
    }
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => {
      const newStep = prev + 1;
      sessionStorage.setItem('currentStep', JSON.stringify(newStep));
      return newStep;
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => {
      const newStep = Math.max(prev - 1, 0);
      sessionStorage.setItem('currentStep', JSON.stringify(newStep));
      return newStep;
    });
  };

  const addSubmittedForm = () => {
    setSubmittedForms((prev) => {
      const newCount = prev + 1;
      sessionStorage.setItem('submittedForms', JSON.stringify(newCount));
      return newCount;
    });
  };

  const connectStore = () => {
    setStoreConnected(true);
    sessionStorage.setItem('storeConnected', 'true');
  };

  const createInitialStore = () => {
    setStoreInitExists(true);
    sessionStorage.setItem('storeInitExists', 'true');
  };

  return (
    <FormContext.Provider
      value={{
        connectStore,
        storeConnected,
        currentStep,
        nextStep,
        prevStep,
        addSubmittedForm,
        submittedForms,
        storeInitExists,
        createInitialStore,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
