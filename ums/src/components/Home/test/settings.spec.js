import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Settings from "../settings.jsx";



describe('Settings Component', () => {
    it('renders correctly', () => {
        render(<MemoryRouter><Settings /></MemoryRouter>);
        expect(screen.getByTestId('settings-component')).toBeInTheDocument();
        expect(screen.getByLabelText('Current Password:')).toBeInTheDocument();
        expect(screen.getByLabelText('New Password:')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirm Password:')).toBeInTheDocument();
      
        // Check for the presence of the button by role
        const changePasswordButton = screen.getByRole('button', { name: 'Change Password' });
        expect(changePasswordButton).toBeInTheDocument();
      });
    it('User input correctly', () => {
      render(<MemoryRouter><Settings /></MemoryRouter>);
  
      const currentPasswordInput = screen.getByLabelText('Current Password:');
      const newPasswordInput = screen.getByLabelText('New Password:');
      const confirmPasswordInput = screen.getByLabelText('Confirm Password:');
  
      fireEvent.change(currentPasswordInput, { target: { value: 'password' } });
      fireEvent.change(newPasswordInput, { target: { value: 'testpassword' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
  
      expect(currentPasswordInput.value).toBe('password');
      expect(newPasswordInput.value).toBe('testpassword');
      expect(confirmPasswordInput.value).toBe('testpassword');
    });
  
    it('shows password do not match', async () => {
        render(<MemoryRouter><Settings /></MemoryRouter>);
      
        const currentPasswordInput = screen.getByLabelText('Current Password:');
        const newPasswordInput = screen.getByLabelText('New Password:');
        const confirmPasswordInput = screen.getByLabelText('Confirm Password:');
      
        fireEvent.change(currentPasswordInput, { target: { value: 'password' } });
        fireEvent.change(newPasswordInput, { target: { value: 'testpassword' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'passwordtest' } });
      
        const saveButton = screen.getByRole('button', { name: 'Change Password' });
        fireEvent.click(saveButton);
      
        // Use waitFor to wait for the appearance of the error message
        await screen.findByText('New password and confirm password do not match.');
      
        const errorMessage = screen.getByText('New password and confirm password do not match.');
        expect(errorMessage).toBeInTheDocument();
      });
      
  });
  