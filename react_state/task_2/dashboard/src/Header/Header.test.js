import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header', () => {
  const contextNotLoggedIn = { user: { isLoggedIn: false, email: '' }, logOut: jest.fn() };
  const contextLoggedIn = { user: { isLoggedIn: true, email: 'user@example.com' }, logOut: jest.fn() };

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('does not create the logoutSection when not logged in', () => {
    const wrapper = shallow(<Header />, { context: contextNotLoggedIn });
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('creates the logoutSection when the user is logged in', () => {
    const wrapper = shallow(<Header />, { context: contextLoggedIn });
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome user@example.com (logout)');
  });

  it('calls the logOut function when logout link is clicked', () => {
    const wrapper = shallow(<Header />, { context: contextLoggedIn });
    wrapper.find('#logoutUser').simulate('click');
    expect(contextLoggedIn.logOut).toHaveBeenCalled();
  });
});

