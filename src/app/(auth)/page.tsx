import React from 'react';
import VerticalStepper from '@/components/VerticalStepper';
import Form from '@/components/Form';
import ResetButton from '@/components/ReserButton/ResetButton';
import HorizontalStepper from '@/components/HorizontalStepper/HorizontalStepper';
import { FormContextProvider } from '@/store/FormContext/FormContext';
import styles from './page.module.css';

const Auth = () => {
  return (
    <FormContextProvider>
      <ResetButton />
      <div className={styles.container}>
        <div className={styles.leftProgress}>
          <VerticalStepper />
          <HorizontalStepper />
        </div>
        <div className={styles.rightForm}>
          <Form />
        </div>
      </div>
    </FormContextProvider>
  );
};

export default Auth;
