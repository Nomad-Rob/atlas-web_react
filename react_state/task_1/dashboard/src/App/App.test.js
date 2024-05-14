import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';

configure({ adapter: new Adapter() });

describe('App', () => {
  // Suppress Aphrodite style injection during tests
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument(); // Assumes "Log in to continue" is rendered when not logged in
  });

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should contain the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should contain the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('should render Login component by default', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should render CourseList component when logged in', () => {
    // Re-render the component with isLoggedIn prop as true
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  // Testing state management for the notification drawer
  it('default state for displayDrawer is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('handleDisplayDrawer sets displayDrawer to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('handleHideDrawer sets displayDrawer to false', () => {
    // First, set it to true to ensure the hide function works from a true state
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should call logOut and alert when Ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const preventDefaultMock = jest.fn();

    // Mount the component with the mocked logOut prop
    wrapper = shallow(<App logOut={logOutMock} />);

    // Simulate Ctrl+h keydown
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    wrapper.instance().componentDidMount();
    map.keydown({ key: 'h', ctrlKey: true, preventDefault: preventDefaultMock });

    expect(preventDefaultMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    // Restore original functions
    alertMock.mockRestore();
  });
});
