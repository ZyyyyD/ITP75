import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Role from '../role.jsx';


describe('Role Component', () => {
    it('renders correctly', () => {
      render(<MemoryRouter><Role /></MemoryRouter>);

      expect(screen.getByRole('button', { name: 'Add Roles' })).toBeInTheDocument(); 



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

    it('sorts by ID', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);
    
        const sortByIdButton = screen.getByRole('button', { name: 'ID' });
        fireEvent.click(sortByIdButton);
    
        // Add your assertions here to check if the data is sorted by ID
      });
    
      it('sorts by No. of Users', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);
    
        const sortByNameButton = screen.getByRole('button', { name: 'No. of Users' });
        fireEvent.click(sortByNameButton);
    
        // Add your assertions here to check if the data is sorted by Name
      });
      
      it('sorts by Handle', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);
    
        const sortByHandleButton = screen.getByRole('button', { name: 'Handle' });
        fireEvent.click(sortByHandleButton);
      });
      
    
      it('clicks on next page button', () => {
        render(<MemoryRouter><Role /></MemoryRouter>);
    
        const nextPageButton = screen.getByRole('button', { class: "1" });
        fireEvent.click(nextPageButton);
      });
});