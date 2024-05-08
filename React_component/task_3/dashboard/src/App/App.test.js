import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/some text in your component/i)).toBeInTheDocument();
});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should contain the Login component', () => {
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  // Testing the keyboard event handling and logout functionality
  it('should call logOut and alert when Ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Mount the component with the mocked logOut prop
    wrapper = shallow(<App logOut={logOutMock} />);

    // Simulating Ctrl+h keydown
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    
    wrapper.instance().componentDidMount();
    map.keydown({ key: 'h', ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore(); // Restore original alert function
  });
});
