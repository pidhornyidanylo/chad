import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { StepThreeContent } from '.';
import { connectCustomerSupportStepListData } from './data';

jest.mock('react-hot-toast', () => ({
  error: jest.fn(),
}));

describe('StepThreeContent Component', () => {
  it('renders BasicForm initially', () => {
    render(<StepThreeContent showLoading={false} errors={{}} />);

    expect(
      screen.getByText('Connect your customer support email')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /connect gmail account/i })
    ).toBeInTheDocument();
  });

  it('toggles to AlternativeRequest when "I don\'t use Gmail" is clicked', () => {
    render(<StepThreeContent showLoading={false} errors={{}} />);

    fireEvent.click(screen.getByText("I don't use Gmail"));

    expect(
      screen.queryByText('Connect your customer support email')
    ).not.toBeInTheDocument();

    expect(
      screen.getByText(/chad beta is currently only integrated with gmail/i)
    ).toBeInTheDocument();
  });

  it('renders each step item in connectCustomerSupportStepListData', () => {
    render(<StepThreeContent showLoading={false} errors={{}} />);

    connectCustomerSupportStepListData.forEach((listItem) => {
      expect(screen.getByText(listItem.title)).toBeInTheDocument();
      expect(screen.getByText(listItem.subtitle)).toBeInTheDocument();
    });
  });
});
