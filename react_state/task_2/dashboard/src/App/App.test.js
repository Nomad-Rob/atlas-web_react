import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';
import AppContext from './App/AppContext';

configure({ adapter: new Adapter() });

describe('App', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('contains Notifications, Header, Footer, Login', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  test('initial state for "user" and "displayDrawer"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('user').isLoggedIn).toBe(false);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  test('logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password123');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('test@example.com');
  });

  test('logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password123'); // First log in
    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
    expect(wrapper.state('user').email).toBe('');
  });

  test('Login and logout update the UI accordingly', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);

    // Simulating login
    wrapper.setContext({ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() });
    wrapper.update();
    expect(wrapper.find(CourseList).exists()).toBe(true);
    expect(wrapper.find(Login).exists()).toBe(false);

    // Simulating logout
    wrapper.setContext({ user: { isLoggedIn: false }, logOut: jest.fn() });
    wrapper.update();
    expect(wrapper.find(CourseList).exists()).toBe(false);
    expect(wrapper.find(Login).exists()).toBe(true);
  });

});
