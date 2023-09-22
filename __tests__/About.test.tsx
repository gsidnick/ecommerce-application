import { render, screen } from '@testing-library/react';
import About from '@/pages/about/index';

describe('About', () => {
  test('render a About component', () => {
    const view = render(<About />);
    expect(view).toBeTruthy();
  });
  test('should show home link', () => {
    render(<About />);
    const link = screen.getByText(/Introduction/i);
    expect(link).toBeInTheDocument();
  });
});
