import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import CourseList from './CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

// Setting up the initial props for the App component
const defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  listCourses: [],
  listNotifications: []
};

describe('App', () => {
  let wrapper;

  // Suppress Aphrodite style injection during tests to avoid unnecessary output and errors
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  beforeEach(() => {
    // Creating a shallow wrapper for App with default props
    wrapper = shallow(<App {...defaultProps} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains Notifications, Header, Footer, and initially Login component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false); // Should not exist when logged out
  });

  it('renders CourseList instead of Login when isLoggedIn is true', () => {
    // Update props to simulate user being logged in
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  describe('mapStateToProps', () => {
    it('should map the state correctly', () => {
      const mockState = {
        courses: {},
        notifications: {},
        ui: {
          isUserLoggedIn: true,
          isNotificationDrawerVisible: true
        }
      };
      const stateProps = mapStateToProps(mockState);
      expect(stateProps.isLoggedIn).toBe(true);
      expect(stateProps.displayDrawer).toBe(true);
    });
  });
});

