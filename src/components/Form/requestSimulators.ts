import { FieldError } from 'react-hook-form';
import { FormDataSchema } from './shema';
import { Inputs } from '.';
import { SafeParseReturnType } from 'zod';

type Result = SafeParseReturnType<
  {
    yourName: string;
    email: string;
    password: string;
  },
  {
    yourName: string;
    email: string;
    password: string;
  }
>;

type Data = {
  yourName: string;
  email: string;
  password: string;
};

const storeNotExistCaseValidated = (result: Result, data: Data) =>
  result.success &&
  data.email === 'test@gmail.com' &&
  data.yourName === 'test' &&
  data.password === '1234QQQaaa!';

const storeExistsCaseValidated = (result: Result, data: Data) =>
  result.success &&
  data.email === 'exists@gmail.com' &&
  data.yourName === 'exists' &&
  data.password === '1234QQQaaa!';

export const simulateFirstFormServerResponse = async (data: Inputs) => {
  const result = FormDataSchema.safeParse(data);

  return new Promise<{
    success: boolean;
    store: boolean;
    errors?: Record<string, FieldError>;
  }>((resolve) => {
    setTimeout(() => {
      if (storeNotExistCaseValidated(result, data)) {
        resolve({ success: true, store: false });
        sessionStorage.setItem('userData', JSON.stringify(data));
      } else if (storeExistsCaseValidated(result, data)) {
        resolve({ success: true, store: true });
        sessionStorage.setItem('userData', JSON.stringify(data));
      } else {
        const errors: Record<string, FieldError> = {};
        result.error?.errors.forEach((err) => {
          errors[err.path[0]] = {
            type: 'manual',
            message: err.message,
          };
        });
        resolve({
          success: false,
          store: false,
          errors,
        });
      }
    }, 2000);
  });
};

export const simulateFormServerResponse = async () => {
  return new Promise<{
    success: boolean;
    errors?: Record<string, FieldError>;
  }>((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2000);
  });
};
