import { render, screen } from '@testing-library/react';
import Contacts from '@/pages/contacts/index';

describe('Contacts', () => {
  test('render a Contacts component', () => {
    const view = render(<Contacts />);
    expect(view).toBeTruthy();
  });
  test('should show home link', () => {
    render(<Contacts />);
    const link = screen.getByText(/To Home/i);
    expect(link).toBeInTheDocument();
  });
});
