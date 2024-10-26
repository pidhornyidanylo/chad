'use client';
import { useState, useContext } from 'react';
import { z } from 'zod';
import { FormDataSchema } from './shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import styles from './style.module.css';
import { StepOneContent } from './StepOneContent';
import { StepTwoContent } from './StepTwoContent';
import { FormContext } from '@/store/FormContext';

type Inputs = z.infer<typeof FormDataSchema>;

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const { currentStep } = useContext(FormContext);
  const [showContinue, setShowContinue] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(FormDataSchema) });

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  const simulateServerResponse = async (data: Inputs) => {
    const result = FormDataSchema.safeParse(data);
    return new Promise<{
      success: boolean;
      errors?: Record<string, FieldError>;
    }>((resolve) => {
      setTimeout(() => {
        if (result.success) {
          resolve({ success: true });
        } else {
          const errors: Record<string, FieldError> = {};
          result.error.errors.forEach((err) => {
            errors[err.path[0]] = {
              type: 'manual',
              message: err.message,
            };
          });
          resolve({
            success: false,
            errors,
          });
        }
      }, 2000);
    });
  };

  const processForm: SubmitHandler<Inputs> = async (data) => {
    setShowLoading(true);
    const response = await simulateServerResponse(data);
    if (response.success) {
      setShowLoading(false);
      setShowContinue(true);
    } else {
      setShowLoading(false);
      console.error(response.errors);
    }
  };

  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <StepOneContent
            showContinue={showContinue}
            showLoading={showLoading}
            register={register}
            errors={errors}
            showPassword={showPassword}
            onPasswordToggle={handlePasswordToggle}
          />
        )}
        {currentStep === 1 && <StepTwoContent />}
      </form>
    </section>
  );
}
