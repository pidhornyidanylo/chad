import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import VerticalStepper from '.';
import { FormContextProvider } from '@/store/FormContext';

beforeEach(() => {
  sessionStorage.clear();
  jest.spyOn(Storage.prototype, 'getItem');
  jest.spyOn(Storage.prototype, 'setItem');
});

describe('VerticalStepper component', () => {
  it('renders content properly', () => {
    sessionStorage.setItem('submittedForms', '2');
    sessionStorage.setItem('currentStep', '1');
    render(
      <FormContextProvider>
        <VerticalStepper />
      </FormContextProvider>
    );
    const step1 = screen.getByText(/welcome/i);
    const step2 = screen.getByText(/connect your shopify store/i);
    const step3 = screen.getByText(/connect your customer support email/i);
    const step4 = screen.getByText(/done/i);
    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
    expect(step4).toBeInTheDocument();
    const nextButton = screen.getByRole('button', {
      name: /next next\-icon/i,
    });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toBeEnabled();
  });
  it('enables prev button if session storage step > 0', () => {
    sessionStorage.setItem('currentStep', '1');
    render(
      <FormContextProvider>
        <VerticalStepper />
      </FormContextProvider>
    );
    const prevButton = screen.getByRole('button', {
      name: /back\-icon back/i,
    });
    expect(prevButton).toBeEnabled();
  });
  it('disables next button if session storage step >= 4', () => {
    sessionStorage.setItem('currentStep', '4');
    render(
      <FormContextProvider>
        <VerticalStepper />
      </FormContextProvider>
    );
    const nextButton = screen.getByRole('button', {
      name: /next next\-icon/i,
    });
    expect(nextButton).toBeDisabled();
  });
});
