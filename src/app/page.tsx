import React from 'react';
import VerticalStepper from '@/components/VerticalStepper';
import Form from '@/components/Form';
import { FormContextProvider } from '@/store/FormContext';
import styles from './page.module.css';

const page = () => {
  return (
    <FormContextProvider>
      <div className={styles.container}>
        <div className={styles.leftProgress}>
          <VerticalStepper />
        </div>
        <div className={styles.rightForm}>
          <Form />
        </div>
      </div>
    </FormContextProvider>
  );
};

export default page;
