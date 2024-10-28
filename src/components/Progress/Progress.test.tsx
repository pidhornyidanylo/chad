import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { FormContextProvider } from '@/store/FormContext/FormContext';
import Progress from './Progress';

describe('HorizontalStepper component', () => {
  it('renders properly', () => {
    render(
      <FormContextProvider>
        <Progress />
      </FormContextProvider>
    );
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
  });
});
