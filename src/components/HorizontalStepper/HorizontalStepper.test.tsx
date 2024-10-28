import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import HorizontalStepper from './HorizontalStepper';
import { FormContextProvider } from '@/store/FormContext/FormContext';

describe('HorizontalStepper component', () => {
  it('renders properly', () => {
    render(
      <FormContextProvider>
        <HorizontalStepper />
      </FormContextProvider>
    );
    const progress = screen.getByTestId('mobileStepper');
    expect(progress).toBeInTheDocument();
  });
});
