import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import User from '../users.jsx';

describe('User Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><User /></MemoryRouter>);

      expect(screen.getByRole('button', { name: 'Add User' })).toBeInTheDocument(); 
      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument(); 
    });
    it('Add User Button', () => {
        render(<MemoryRouter><User /></MemoryRouter>);

        const adduserButton = screen.getByRole('button', { name: 'Add User' });
        fireEvent.click(adduserButton); 
    });
    it('Search Bar', () => {
        render(<MemoryRouter><User /></MemoryRouter>); 

        const searchInput = screen.getByPlaceholderText('Search'); 

        fireEvent.change(searchInput, { target: { value: 'John Smith' } });  
        fireEvent.change(searchInput, { target: { value: 'Alice Johnson' } }); 
        fireEvent.change(searchInput, { target: { value: 'Michael Davis' } }); 
    });
});