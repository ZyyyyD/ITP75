import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Change to MemoryRouter
import Login from "./components/Home/login";
import Settings from "./components/Home/settings";
import { render } from '@testing-library/react';
import Signout from "./components/Home/signout.jsx";
import Notification from "./components/Home/notification.jsx";
import { IconButton } from '@mui/material';
import Role from './components/Home/role.jsx';
import User from './components/Home/users.jsx';


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
        describe('User Component', () => {
          it('renders correctly', () => {
            const { container } = render(<MemoryRouter><User /></MemoryRouter>);
            expect(container).toMatchSnapshot();
      });
      });
    });
  });
  });
});
});
