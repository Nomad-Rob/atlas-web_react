import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

configure({ adapter: new Adapter() });

describe('App', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();  // Suppress Aphrodite style injection
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    render(<App />);
    // Adjust this to match actual text or remove if not needed
    expect(screen.queryByText(/some text in your component/i)).toBeInTheDocument();
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

  it('should contain the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('should call logOut and alert when Ctrl+h is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Mount the component with the mocked logOut prop
    wrapper = shallow(<App logOut={logOutMock} />);

    // Simulate Ctrl+h keydown
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    wrapper.instance().componentDidMount();
    map.keydown({ key: 'h', ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();  // Restore original alert function
  });
});
