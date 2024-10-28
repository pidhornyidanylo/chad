import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { ToastContext, ToastProvider } from './ToastContext';

const TestCurrentStep = () => {
  const { position } = useContext(ToastContext);

  return (
    <div>
      <p data-testid='position-status'>{position}</p>
    </div>
  );
};

describe('Toast notification', () => {
  it('initial position is bottom-right', () => {
    render(
      <ToastProvider>
        <TestCurrentStep />
      </ToastProvider>
    );
    const status = screen.getByTestId('position-status');
    expect(status).toBeInTheDocument();
    expect(status).toHaveTextContent('bottom-right');
  });
  it('changes position if screen width changes', () => {
    window.innerWidth = 575;
    window.dispatchEvent(new Event('resize'));
    render(
      <ToastProvider>
        <TestCurrentStep />
      </ToastProvider>
    );
    const status = screen.getByTestId('position-status');
    expect(status).toBeInTheDocument();
    expect(status).toHaveTextContent('top-center');
  });
});
