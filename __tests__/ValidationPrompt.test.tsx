import { render, screen } from '@testing-library/react';
import ValidationPrompt from '@/components/ValidationPrompt';

describe('component/ValidationPrompt', () => {
  test('render a ValidationPrompt', () => {
    const view = render(<ValidationPrompt validation="text" />);
    expect(view).toBeTruthy();
  });
  test('should be red helper when empty value', () => {
    render(<ValidationPrompt validation="" />);
    const helper = screen.getByText(/Not Empty/i, {
      selector: '.text-red-500',
    });
    expect(helper).toBeInTheDocument();
  });
  test('should be green helper when value at least 8 characters', () => {
    render(<ValidationPrompt validation="abcdefgh" />);
    const helper = screen.getByText(/8\+ characters/i, {
      selector: '.text-green-dark',
    });
    expect(helper).toBeInTheDocument();
  });
  test('should be green helper when value at less 8 characters', () => {
    render(<ValidationPrompt validation="abcdefg" />);
    const helper = screen.getByText(/8\+ characters/i, {
      selector: '.text-red-500',
    });
    expect(helper).toBeInTheDocument();
  });
  test('should be green helper when value have at least one upper case character', () => {
    render(<ValidationPrompt validation="UPPER TEXT" />);
    const helper = screen.getByText(/Upper case/i, {
      selector: '.text-green-dark',
    });
    expect(helper).toBeInTheDocument();
  });
  test('should be green helper when value have at least one lower case character', () => {
    render(<ValidationPrompt validation="lower text" />);
    const helper = screen.getByText(/Lower case/i, {
      selector: '.text-green-dark',
    });
    expect(helper).toBeInTheDocument();
  });
  test('should be green helper when value have at least one number character', () => {
    render(<ValidationPrompt validation="0" />);
    const helper = screen.getByText(/Number/i, {
      selector: '.text-green-dark',
    });
    expect(helper).toBeInTheDocument();
  });
  test('should be green helper when value have at least one special character', () => {
    render(<ValidationPrompt validation="#" />);
    const helper = screen.getByText(/Symbol/i, {
      selector: '.text-green-dark',
    });
    expect(helper).toBeInTheDocument();
  });
  test('should be all green helpers when value is valid', () => {
    render(<ValidationPrompt validation="#Aa1Bb2@" />);
    const notEmpty = screen.getByText(/Not Empty/i, {
      selector: '.text-green-dark',
    });
    const eight = screen.getByText(/8\+ characters/i, {
      selector: '.text-green-dark',
    });
    const upper = screen.getByText(/Upper case/i, {
      selector: '.text-green-dark',
    });
    const lower = screen.getByText(/Lower case/i, {
      selector: '.text-green-dark',
    });
    const number = screen.getByText(/Number/i, {
      selector: '.text-green-dark',
    });
    const symbol = screen.getByText(/Symbol/i, {
      selector: '.text-green-dark',
    });
    expect(notEmpty).toBeInTheDocument();
    expect(eight).toBeInTheDocument();
    expect(upper).toBeInTheDocument();
    expect(lower).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(symbol).toBeInTheDocument();
  });
});
