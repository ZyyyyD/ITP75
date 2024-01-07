import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Login from "../login.jsx"; // Adjust the path based the file structure


describe('Login Component', () => {
  it('renders correctly', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
   
    expect(screen.getByTestId('login-component')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('Handles user input correctly', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'cueno@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput.value).toBe('cueno@gmail.com');
    expect(passwordInput.value).toBe('password');
    
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);
  });
  it('Handles incorrect password', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);

    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    const errorMessage = screen.getByText('Wrong password. Please try again.');
    expect(errorMessage).toBeInTheDocument();

  });
  it('Shows error for wrong email', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);

    const emailInput = screen.getByLabelText('Email Address');
    fireEvent.change(emailInput, { target: { value: 'wrongemail@gmail.com' } });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    const errorMessage = screen.getByText('Wrong email. Please try again.');
    expect(errorMessage).toBeInTheDocument();
  });
});
