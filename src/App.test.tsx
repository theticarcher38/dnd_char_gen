import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check for stats', () => {
  render(<App />);
  const strStat = screen.getByDisplayValue('Race:');
  expect(strStat).toBeInTheDocument();
});
