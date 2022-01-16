import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application properly', () => {
  render(<App />);
  const linkElement = screen.getByDisplayValue(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
