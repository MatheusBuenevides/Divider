import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

test('renders login form by default', () => {
  render(<Home />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
});

test('switches to register form on button click', () => {
  render(<Home />);
  fireEvent.click(screen.getByText(/Registrar/i));
  expect(screen.getByText(/Registrar/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument();
});
