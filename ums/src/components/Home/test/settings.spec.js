import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Settings from "../settings.jsx";

<<<<<<< HEAD


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
  
=======
describe('Settings Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><Settings /></MemoryRouter>);

      expect(screen.getByLabelText('Current Admin Password:')).toBeInTheDocument();
      expect(screen.getByLabelText('New Admin Password:')).toBeInTheDocument();
      expect(screen.getByLabelText('Confirm Admin Password:')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'SAVE' })).toBeInTheDocument();
    });
    it('User input correctly', () => {
        render(<MemoryRouter><Settings /></MemoryRouter>);
    
        const currentPasswordInput = screen.getByLabelText('Current Admin Password:');
        const newPasswordInput = screen.getByLabelText('New Admin Password:');
        const confirmPasswordInput = screen.getByLabelText('Confirm Admin Password:');
    
        fireEvent.change(currentPasswordInput, { target: { value: 'password' } });
        fireEvent.change(newPasswordInput, { target: { value: 'testpassword' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'testpassword' } });
    
        expect(currentPasswordInput.value).toBe('password');
        expect(newPasswordInput.value).toBe('testpassword');
        expect(confirmPasswordInput.value).toBe('testpassword');
      });
      it('Shows password did not match', () => {
        render(<MemoryRouter><Settings /></MemoryRouter>);
    
        const currentPasswordInput = screen.getByLabelText('Current Admin Password:');
        const newPasswordInput = screen.getByLabelText('New Admin Password:');
        const confirmPasswordInput = screen.getByLabelText('Confirm Admin Password:');
    
        fireEvent.change(currentPasswordInput, { target: { value: 'password' } });
        fireEvent.change(newPasswordInput, { target: { value: 'testpassword' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'passwordtest' } });
    
        const saveButton = screen.getByRole('button', { name: 'SAVE' });
        fireEvent.click(saveButton);
    
        const errorMessage = screen.getByText('Passwords do not match');
        expect(errorMessage).toBeInTheDocument();
    
      });
      it('Should password at least 6 characters', () => {
        render(<MemoryRouter><Settings /></MemoryRouter>);
    
        const currentPasswordInput = screen.getByLabelText('Current Admin Password:');
        const newPasswordInput = screen.getByLabelText('New Admin Password:');
        const confirmPasswordInput = screen.getByLabelText('Confirm Admin Password:');
    
        fireEvent.change(currentPasswordInput, { target: { value: 'password' } });
        fireEvent.change(newPasswordInput, { target: { value: 'pass' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'pass' } });
    
        const saveButton = screen.getByRole('button', { name: 'SAVE' });
        fireEvent.click(saveButton);
    
        const errorMessage = screen.getByText('Password should be at least 6 characters');
        expect(errorMessage).toBeInTheDocument();
    
      });
      it('Users use delete button', () => {
        render(<MemoryRouter><Settings /></MemoryRouter>);
    
        const currentPasswordInput = screen.getByLabelText('Current Admin Password:');
        const newPasswordInput = screen.getByLabelText('New Admin Password:');
        const confirmPasswordInput = screen.getByLabelText('Confirm Admin Password:');
    
        fireEvent.change(currentPasswordInput, { target: { value: 'password' } });
        fireEvent.change(newPasswordInput, { target: { value: 'passwords' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'passwords' } });
    
        const handleDeleteButton = screen.getByRole('button', { name: 'DELETE' });
        fireEvent.click(handleDeleteButton); 
      });
});
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
