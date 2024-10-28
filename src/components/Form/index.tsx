'use client';
import { useState, useContext, useEffect, useRef } from 'react';
import { z } from 'zod';
import { FormDataSchema } from './shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './style.module.css';
import { StepOneContent } from './StepOneContent';
import { StepTwoContent } from './StepTwoContent';
import { StepThreeContent } from './StepThreeContent';
import {
  simulateFirstFormServerResponse,
  simulateFormServerResponse,
} from './requestSimulators';
import { redirect } from 'next/navigation';
import { Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { FormContext } from '@/store/FormContext/FormContext';
import gsap from 'gsap';

export type Inputs = z.infer<typeof FormDataSchema>;

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    currentStep,
    addSubmittedForm,
    connectStore,
    submittedForms,
    createInitialStore,
    nextStep,
  } = useContext(FormContext);
  const [showLoading, setShowLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(FormDataSchema) });

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const processForm: SubmitHandler<Inputs> = async (data) => {
    if (currentStep === 0 && submittedForms === 0) {
      firstStepResolver(data);
    } else if (currentStep === 1 && submittedForms === 1) {
      secondStepResolver();
    } else if (currentStep === 2 && submittedForms === 2) {
      thirdStepResolver();
    }
  };

  const firstStepResolver = async (data: {
    yourName: string;
    email: string;
    password: string;
  }) => {
    setShowLoading(true);
    const response = await simulateFirstFormServerResponse(data);
    if (response.success && !response.store) {
      successfullResponseWithNoExistingStore();
      toast.success('Account created successfully!');
    } else if (response.success && response.store) {
      successfullResponseWithExistingStore();
      toast.success('Account created successfully!');
    } else {
      firstStepErrorResponse();
      toast.error('Wrong credentials');
    }
  };

  const secondStepResolver = async () => {
    setShowLoading(true);
    const response = await simulateFormServerResponse();
    if (response.success) {
      secondStepSuccessfullResponse();
      toast.success('Store connected!');
    } else {
      secondStepErrorResponse();
      toast.error('Oops! Something went wrong.');
    }
  };

  const thirdStepResolver = async () => {
    setShowLoading(true);
    const response = await simulateFormServerResponse();
    if (response.success) {
      thirdStepSuccessfullResponse();
      toast.success('Gmail connected!');
    } else {
      thirdStepErrorResponse();
      toast.error('Oops! Something went wrong.');
    }
  };

  const thirdStepSuccessfullResponse = () => {
    setShowLoading(false);
    addSubmittedForm();
    addSubmittedForm();
    nextStep();
    setTimeout(() => redirect('/greet'), 1500);
  };

  const thirdStepErrorResponse = () => {
    setShowLoading(false);
  };

  const successfullResponseWithNoExistingStore = () => {
    setShowLoading(false);
    addSubmittedForm();
  };

  const successfullResponseWithExistingStore = () => {
    createInitialStore();
    setShowLoading(false);
    addSubmittedForm();
    addSubmittedForm();
  };

  const firstStepErrorResponse = () => {
    setShowLoading(false);
  };

  const secondStepSuccessfullResponse = () => {
    setShowLoading(false);
    connectStore();
    addSubmittedForm();
  };

  const secondStepErrorResponse = () => {
    setShowLoading(false);
  };

  const boxRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    gsap.from(boxRef.current, {
      scale: 1.02,
      duration: 0.5,
      ease: 'power2.out',
    });
  }, [currentStep]);

  return (
    <section>
      {currentStep <= 2 && (
        <form
          ref={boxRef}
          className={styles.form}
          onSubmit={handleSubmit(processForm)}
        >
          {currentStep === 0 && (
            <StepOneContent
              showLoading={showLoading}
              register={register}
              errors={errors}
              showPassword={showPassword}
              onPasswordToggle={handlePasswordToggle}
            />
          )}
          {currentStep === 1 && <StepTwoContent showLoading={showLoading} />}
          {currentStep === 2 && (
            <StepThreeContent errors={errors} showLoading={showLoading} />
          )}
        </form>
      )}
      {currentStep > 2 && (
        <Typography variant='h4' sx={{ color: 'var(--typography-blue-dark)' }}>
          Done
        </Typography>
      )}
    </section>
  );
};
export default Form;
