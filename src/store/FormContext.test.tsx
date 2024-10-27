import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormContext, FormContextProvider } from './FormContext';
import { useContext } from 'react';

const TestCurrentStep = () => {
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

const TestSubmittedForms = () => {
  const { submittedForms, addSubmittedForm } = useContext(FormContext);

  return (
    <div>
      <p data-testid='submittedForms-status'>{submittedForms}</p>
      <button onClick={() => addSubmittedForm()} data-testid='addSubmittedForm'>
        Add submitted
      </button>
    </div>
  );
};

const TestStoreConnection = () => {
  const { storeConnected, connectStore } = useContext(FormContext);

  return (
    <div>
      <p data-testid='store-status'>{storeConnected.toString()}</p>
      <button onClick={() => connectStore()} data-testid='connectStore'>
        Connect Store
      </button>
    </div>
  );
};

const TestStoreInitialExistance = () => {
  const { createInitialStore, storeInitExists } = useContext(FormContext);

  return (
    <div>
      <p data-testid='initStore-status'>{storeInitExists.toString()}</p>
      <button
        onClick={() => createInitialStore()}
        data-testid='createInitStore'
      >
        Connect Store
      </button>
    </div>
  );
};

beforeEach(() => {
  sessionStorage.clear();
  jest.spyOn(Storage.prototype, 'getItem');
  jest.spyOn(Storage.prototype, 'setItem');
});

describe('FormContextProvider', () => {
  it('sets initial step based on sessionStorage', () => {
    sessionStorage.setItem('currentStep', '1');
    render(
      <FormContextProvider>
        <TestCurrentStep />
      </FormContextProvider>
    );
    expect(screen.getByTestId('step-status')).toHaveTextContent('1');
  });

  it('increases step after clicking Next Step button', () => {
    render(
      <FormContextProvider>
        <TestCurrentStep />
      </FormContextProvider>
    );
    expect(screen.getByTestId('step-status')).toHaveTextContent('0');

    const increaseButton = screen.getByTestId('increase-button');
    fireEvent.click(increaseButton);
    expect(screen.getByTestId('step-status')).toHaveTextContent('1');
    expect(sessionStorage.getItem('currentStep')).toBe('1');
  });

  it('decreases step after clicking Prev Step button', () => {
    sessionStorage.setItem('currentStep', '1');
    render(
      <FormContextProvider>
        <TestCurrentStep />
      </FormContextProvider>
    );
    expect(screen.getByTestId('step-status')).toHaveTextContent('1');

    const decreaseButton = screen.getByTestId('decrease-button');
    fireEvent.click(decreaseButton);
    expect(screen.getByTestId('step-status')).toHaveTextContent('0');
    expect(sessionStorage.getItem('currentStep')).toBe('0');
  });

  it('sets submitted forms based on sessionStorage', () => {
    sessionStorage.setItem('submittedForms', '1');
    render(
      <FormContextProvider>
        <TestSubmittedForms />
      </FormContextProvider>
    );
    expect(screen.getByTestId('submittedForms-status')).toHaveTextContent('1');
  });

  it('increases submitted forms after clicking Next button', () => {
    render(
      <FormContextProvider>
        <TestSubmittedForms />
      </FormContextProvider>
    );
    expect(screen.getByTestId('submittedForms-status')).toHaveTextContent('0');

    const increaseButton = screen.getByTestId('addSubmittedForm');
    fireEvent.click(increaseButton);
    expect(screen.getByTestId('submittedForms-status')).toHaveTextContent('1');
    expect(sessionStorage.getItem('submittedForms')).toBe('1');
  });

  it('sets store connection based on session storage', () => {
    sessionStorage.setItem('storeConnected', 'false');
    render(
      <FormContextProvider>
        <TestStoreConnection />
      </FormContextProvider>
    );
    expect(screen.getByTestId('store-status')).toHaveTextContent('false');
  });

  it('cahnges store connection based on session storage', () => {
    sessionStorage.setItem('storeConnected', 'false');
    render(
      <FormContextProvider>
        <TestStoreConnection />
      </FormContextProvider>
    );
    expect(screen.getByTestId('store-status')).toHaveTextContent('false');
    fireEvent.click(screen.getByTestId('connectStore'));
    expect(screen.getByTestId('store-status')).toHaveTextContent('true');
  });

  it('sets initial store existance based on session storage', () => {
    sessionStorage.setItem('storeInitExists', 'false');
    render(
      <FormContextProvider>
        <TestStoreInitialExistance />
      </FormContextProvider>
    );
    expect(screen.getByTestId('initStore-status')).toHaveTextContent('false');
  });

  it('cahnges store connection based on session storage', () => {
    sessionStorage.setItem('storeInitExists', 'false');
    render(
      <FormContextProvider>
        <TestStoreInitialExistance />
      </FormContextProvider>
    );
    expect(screen.getByTestId('initStore-status')).toHaveTextContent('false');
    fireEvent.click(screen.getByTestId('createInitStore'));
    expect(screen.getByTestId('initStore-status')).toHaveTextContent('true');
  });
});
