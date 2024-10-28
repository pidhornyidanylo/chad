import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { StepOneContent } from '.';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FormValues = {
  email: string;
  yourName: string;
  password: string;
};

describe('StepOneContent component', () => {
  const mockRegister = jest.fn() as unknown as UseFormRegister<FormValues>;

  const mockErrors: FieldErrors<FormValues> = {
    email: { type: 'required', message: 'Email is required' },
    yourName: { type: 'required', message: 'Name is required' },
    password: { type: 'minLength', message: 'Password is too short' },
  };

  const setup = ({ showPassword = false, showLoading = false } = {}) =>
    render(
      <StepOneContent
        register={mockRegister}
        errors={mockErrors}
        showPassword={showPassword}
        showLoading={showLoading}
        onPasswordToggle={() => {}}
      />
    );

  it('renders content properly', () => {
    setup();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Password is too short')).toBeInTheDocument();
  });
  it('shows the password in plain text when showPassword is true', () => {
    setup({ showPassword: true });

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  it('displays loading indicator when showLoading is true', () => {
    setup({ showLoading: true });

    const button = screen.getByRole('button', { name: /create account/i });
    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveClass('MuiLoadingButton-loading');
  });
});
