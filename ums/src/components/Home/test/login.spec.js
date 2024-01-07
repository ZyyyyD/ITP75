import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
<<<<<<< HEAD
import Login from "../login.jsx"; // Adjust the path based on the file structure

=======
import Login from "../login.jsx"; // Adjust the path based the file structure
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2


describe('Login Component', () => {
  it('renders correctly', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
   
    expect(screen.getByTestId('login-component')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

<<<<<<< HEAD
  it('handles user input correctly', () => {
=======
  it('Handles user input correctly', () => {
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
    render(<MemoryRouter><Login /></MemoryRouter>);

    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: 'cueno@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput.value).toBe('cueno@gmail.com');
    expect(passwordInput.value).toBe('password');
<<<<<<< HEAD
  });
  it('VALIDATION', () => {
=======
    
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);
  });
  it('Handles incorrect password', () => {
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
    render(<MemoryRouter><Login /></MemoryRouter>);

    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    const errorMessage = screen.getByText('Wrong password. Please try again.');
    expect(errorMessage).toBeInTheDocument();
<<<<<<< HEAD
  });
  it('shows error for wrong email', () => {
=======

  });
  it('Shows error for wrong email', () => {
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
    render(<MemoryRouter><Login /></MemoryRouter>);

    const emailInput = screen.getByLabelText('Email Address');
    fireEvent.change(emailInput, { target: { value: 'wrongemail@gmail.com' } });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

<<<<<<< HEAD
    // Update the expected text based on the actual error message in your component
=======
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
    const errorMessage = screen.getByText('Wrong email. Please try again.');
    expect(errorMessage).toBeInTheDocument();
  });
});
