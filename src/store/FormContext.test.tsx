import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormContext, FormContextProvider } from './FormContext';
import { useContext } from 'react';

const TestComponent = () => {
  const { currentStep, prevStep, nextStep } = useContext(FormContext);

  return (
    <div>
      <p data-testid='step-status'>{currentStep}</p>
      <button onClick={() => nextStep()} data-testid='increase-button'>
        Next Step
      </button>
      <button onClick={() => prevStep()} data-testid='decrease-button'>
        Prev Step
      </button>
    </div>
  );
};

beforeEach(() => {
  sessionStorage.clear();
  jest.spyOn(Storage.prototype, 'getItem');
  jest.spyOn(Storage.prototype, 'setItem');
});

describe('ThemeContextProvider', () => {
  it('initial step is set based on SessionStorage', () => {
    sessionStorage.setItem('currentStep', '0');
    render(
      <FormContextProvider>
        <TestComponent />
      </FormContextProvider>
    );
    expect(screen.getByTestId('step-status')).toHaveTextContent('0');
  });

  it('decreases step after clicking Next Step button', () => {
    render(
      <FormContextProvider>
        <TestComponent />
      </FormContextProvider>
    );
    expect(screen.getByTestId('step-status')).toHaveTextContent('0');

    expect(sessionStorage.getItem('currentStep')).toBe('0');
    const increaseButton = screen.getByTestId('decrease-button');
    fireEvent.click(increaseButton);
    expect(screen.getByTestId('step-status')).toHaveTextContent('-1');
    expect(sessionStorage.getItem('currentStep')).toBe('-1');
  });
});
