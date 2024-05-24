import React from 'react';
import { shallow } from 'enzyme';
import { useContext } from 'react';
import Footer from './Footer';

// Mock useContext before importing the Footer
jest.mock('react', () => ({
  ...jest.requireActual('react'), // use actual for all non-hook parts
  useContext: jest.fn(), // mock useContext
}));

describe('Footer', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clears any previous mocking info between tests
  });

  it('renders without crashing', () => {
    useContext.mockImplementation(() => ({ user: { isLoggedIn: false } }));
    shallow(<Footer />);
  });

  it('renders copyright text', () => {
    useContext.mockImplementation(() => ({ user: { isLoggedIn: false } }));
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  });

  it('does not display the Contact us link when the user is logged out', () => {
    useContext.mockImplementation(() => ({ user: { isLoggedIn: false } }));
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
  });

  it('displays the Contact us link when the user is logged in', () => {
    useContext.mockImplementation(() => ({ user: { isLoggedIn: true, email: 'user@example.com' } }));
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
  });
});
