import React from 'react';
<<<<<<< HEAD
import { create } from 'react-test-renderer';
=======
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Change to MemoryRouter
import Login from "./components/Home/login";
import Settings from "./components/Home/settings";
import { render } from '@testing-library/react';
import Signout from "./components/Home/signout.jsx";
import Notification from "./components/Home/notification.jsx";
import { IconButton } from '@mui/material';
import Role from './components/Home/role.jsx';
<<<<<<< HEAD

=======
import User from './components/Home/users.jsx';


>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
describe('Login Component', () => {
  it('renders correctly', () => {
    const { container } = render(<MemoryRouter><Login /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });
  describe('Settings Component', () => {
    it('renders correctly', () => {
      const { container } = render(<MemoryRouter><settings /></MemoryRouter>);
      expect(container).toMatchSnapshot();
    });
      describe('Signout Component', () => {
        it('renders correctly', () => {
          const { container } = render(<MemoryRouter><Signout /></MemoryRouter>);
          expect(container).toMatchSnapshot();
        });
        describe('Notification Component', () => {
          it('renders correctly', () => {
            const { container } = render(<MemoryRouter><Notification /></MemoryRouter>);
            expect(container).toMatchSnapshot();
          });
          describe('Role Component', () => {
            it('renders correctly', () => {
              const { container } = render(<MemoryRouter><Role /></MemoryRouter>);
              expect(container).toMatchSnapshot();
        });
<<<<<<< HEAD
=======
        describe('User Component', () => {
          it('renders correctly', () => {
            const { container } = render(<MemoryRouter><User /></MemoryRouter>);
            expect(container).toMatchSnapshot();
      });
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
      });
    });
  });
  });
<<<<<<< HEAD
});
=======
});
});
>>>>>>> f9827ef0bd6857920ac0b9491337ae7e47b786e2
