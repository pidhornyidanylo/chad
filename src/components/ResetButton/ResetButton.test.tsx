import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ResetButton from './ResetButton';

beforeEach(() => {
  sessionStorage.clear();
  jest.spyOn(Storage.prototype, 'getItem');
  jest.spyOn(Storage.prototype, 'setItem');
});

describe('Reset Button component', () => {
  it('resets session storage data on click', () => {
    sessionStorage.setItem('currentStep', '0');
    sessionStorage.setItem('submittedForms', '0');
    sessionStorage.setItem('storeConnected', 'false');
    sessionStorage.setItem('storeInitExists', 'false');
    render(<ResetButton />);
    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });
    fireEvent.click(resetButton);
    expect(sessionStorage.getItem('currentStep')).toBeNull();
    expect(sessionStorage.getItem('submittedForms')).toBeNull();
    expect(sessionStorage.getItem('storeConnected')).toBeNull();
    expect(sessionStorage.getItem('storeInitExists')).toBeNull();
  });
});
