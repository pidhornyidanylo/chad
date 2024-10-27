import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { StepTwoContent } from '.';

describe('StepTwoContent component', () => {
  it('reders content properly', () => {
    render(<StepTwoContent showLoading={false} />);
    const heading = screen.getByRole('heading', {
      name: /chad/i,
    });
    const subHeading = screen.getByRole('heading', {
      name: /connect your shopify store/i,
    });
    const textContent = screen.getByText(
      /installs the chad widget in your shopify store and sets it up to display your customers’ order information and self\-serve options\./i
    );

    const stackPaperText1 = screen.getByRole('heading', {
      name: /track orders and shipping/i,
    });
    const stackTypo1 = screen.getByRole('heading', {
      name: /global coverage with 600\+ couriers supported/i,
    });
    const stackPaperText2 = screen.getByRole('heading', {
      name: /manage orders/i,
    });
    const stackTypo2 = screen.getByRole('heading', {
      name: /allow customers to track, return, exchange, or report problems with their orders/i,
    });
    const stackPaperText3 = screen.getByRole('heading', {
      name: /process returns and exchanges/i,
    });
    const stackTypo3 = screen.getByRole('heading', {
      name: /automatically checks your store policy and existing inventory before resolving or escalating each request/i,
    });
    const button = screen.getByRole('button', {
      name: /connect store/i,
    });
    const button1 = screen.getByRole('button', {
      name: /i don't use shopify/i,
    });
    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(textContent).toBeInTheDocument();
    expect(stackPaperText1).toBeInTheDocument();
    expect(stackTypo1).toBeInTheDocument();
    expect(stackPaperText2).toBeInTheDocument();
    expect(stackTypo2).toBeInTheDocument();
    expect(stackPaperText3).toBeInTheDocument();
    expect(stackTypo3).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
  });
  it('shows alternative tab after clicking button', () => {
    render(<StepTwoContent showLoading={false} />);
    const button1 = screen.getByRole('button', {
      name: /i don't use shopify/i,
    });
    expect(button1).toBeInTheDocument();
    fireEvent.click(button1);
    const heading = screen.getByRole('heading', {
      name: /don't use shopify\?/i,
    });
    const subText = screen.getByText(
      /chad beta is currently only available on shopify\. we`ll send you an email when chad becomes available on your platform\./i
    );
    const platformLabel = screen.getByRole('heading', {
      name: /platform/i,
    });
    const select = screen.getByRole('combobox');
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    const actuallyConnectButton = screen.getByRole('button', {
      name: /connect/i,
    });
    expect(heading).toBeInTheDocument();
    expect(subText).toBeInTheDocument();
    expect(platformLabel).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(actuallyConnectButton).toBeInTheDocument();
  });
  it('show success tab after clicking submit', () => {
    render(<StepTwoContent showLoading={false} />);
    const button1 = screen.getByRole('button', {
      name: /i don't use shopify/i,
    });
    expect(button1).toBeInTheDocument();
    fireEvent.click(button1);
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    const receivedResponse = screen.getByRole('heading', {
      name: /response received/i,
    });
    const doneButton = screen.getByRole('button', {
      name: /done/i,
    });
    expect(receivedResponse).toBeInTheDocument();
    expect(doneButton).toBeInTheDocument();
  });
});
