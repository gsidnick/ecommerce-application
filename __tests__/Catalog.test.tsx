import { render, screen } from '@testing-library/react';
import Catalog from '@/pages/catalog/index';

describe('Catalog', () => {
  test('render a Catalog component', () => {
    const view = render(<Catalog />);
    expect(view).toBeTruthy();
  });
  test('should show home link', () => {
    render(<Catalog />);
    const link = screen.getByText(/To Home/i);
    expect(link).toBeInTheDocument();
  });
});
