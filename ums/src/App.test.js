import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Change to MemoryRouter
import Login from "./components/Home/login";
import { render } from '@testing-library/react';
import Settings from '@mui/icons-material/Settings';


// ... rest of the imports


describe('Login Component', () => {
  it('renders correctly', () => {
    const { container } = render(<MemoryRouter><Login /></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });
  describe('Settings Component', () => {
    it('renders correctly', () => {
      const { container } = render(<MemoryRouter><Settings /></MemoryRouter>);
      expect(container).toMatchSnapshot();
    });
    describe('Users Component Rendering', () => {
      it('renders correctly with default data', () => {
        const { container } = render(
          <MemoryRouter>
            {/* Add any necessary setup for Material-UI */}
            <Users />
          </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
      });
    });
  });
});
