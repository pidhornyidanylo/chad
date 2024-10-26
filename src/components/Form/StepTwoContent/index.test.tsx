import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { StepTwoContent } from '.';

describe('StepTwoContent component', () => {
  it('reders content properly', () => {
    render(<StepTwoContent />);
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
    const link = screen.getByRole('link', {
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
    expect(link).toBeInTheDocument();
  });
});
