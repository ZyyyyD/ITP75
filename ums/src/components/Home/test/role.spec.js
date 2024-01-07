import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Role from '../role.jsx';


describe('Role Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><Role /></MemoryRouter>);

      expect(screen.getByRole('button', { name: 'Add Roles' })).toBeInTheDocument(); 
<<<<<<< HEAD

=======
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
      expect(screen.getByPlaceholderText('Search')).toBeInTheDocument(); 

    });
    it('Add Roles Button', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);

        const addrolesButton = screen.getByRole('button', { name: 'Add Roles' });
        fireEvent.click(addrolesButton); 
    });
    it('Search Bar', () => {
        render(<MemoryRouter><Role /></MemoryRouter>); 

        const searchInput = screen.getByPlaceholderText('Search'); 

        fireEvent.change(searchInput, { target: { value: 'Admin' } });  
        fireEvent.change(searchInput, { target: { value: 'Manager' } }); 
        fireEvent.change(searchInput, { target: { value: 'User' } }); 
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
