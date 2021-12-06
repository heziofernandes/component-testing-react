import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

const countInitial = '0';

describe('Counter Component', () => {
  test('Should start the title with the value 0', () => {
    render(<Counter />);

    const counterTitle = screen.getByText(countInitial);

    expect(counterTitle).toBeInTheDocument();
  });

  test('Should contain the counter__title class in the title', () => {
    render(<Counter />);

    const counterTitle = screen.getByText(countInitial);

    expect(counterTitle).toHaveClass('counter__title');
  });

  test('Should not  start the title with the classes counter__title--increment and counter__title--decrement', () => {
    render(<Counter />);

    const counterTitle = screen.getByText(countInitial);

    expect(counterTitle).not.toHaveClass('counter__title--increment');
    expect(counterTitle).not.toHaveClass('counter__title--decrement');
  });

  test('Should contain an TestID Increment', () => {
    render(<Counter />);

    const btnIncrementId = screen.getByTestId('btn-increment')

    expect(btnIncrementId).toBeInTheDocument();
  });

  test('Should contain an TestID Decrement', () => {
    render(<Counter />);

    const btnDecreaseId = screen.getByTestId('btn-decrement')

    expect(btnDecreaseId).toBeInTheDocument();
  });

  test('Should contain an increment button', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {
      name: /Increase/i,
    });

    expect(buttonIncrement).toBeInTheDocument();
  });

  test('Should contain an increment button with the button and button--increment classes', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {
      name: /Increase/i,
    });

    expect(buttonIncrement).toHaveClass('button');
    expect(buttonIncrement).toHaveClass('button--increment');
  });

  test('Should contain a decrement button', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {
      name: /Decrease/i,
    });

    expect(buttonDecrement).toBeInTheDocument();
  });

  test('Should contain a decrement button with the button and button--decrement classes', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {
      name: /Decrease/i,
    });

    expect(buttonDecrement).toHaveClass('button');
    expect(buttonDecrement).toHaveClass('button--decrement');
  });

  test('Shold increment +1 by clicking the increment button', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {
      name: /Increase/i,
    });

    expect(screen.queryByText('1')).toBeNull();
    userEvent.click(buttonIncrement);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('Should decrement - 1 when clicking the decrement button', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {
      name: /Decrease/i,
    });

    expect(screen.queryByText('-1')).toBeNull();
    userEvent.click(buttonDecrement);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  test('Should add the counter__title--increment class to the title, when the value is greater than 0', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {
      name: /Increase/i,
    });

    expect(screen.queryByText('0')).not.toHaveClass(
      'counter__title--increment'
    );
    userEvent.click(buttonIncrement);
    expect(screen.getByText('1')).toHaveClass('counter__title--increment');
  });

  test('Should add the counter__title--decrement class to the title, when the value is less than 0', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {
      name: /Decrease/i,
    });

    expect(screen.queryByText('0')).not.toHaveClass(
      'counter__title--decrement'
    );
    userEvent.click(buttonDecrement);
    expect(screen.getByText('-1')).toHaveClass('counter__title--decrement');
  });
});
