import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelector from '../components/LanguageSelector';

test('changes language', () => {
  render(<LanguageSelector />);
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'hi' } });
  expect(select.value).toBe('hi');
});