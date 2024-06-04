import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not create the logoutSection when not logged in', () => {
    const wrapper = shallow(<Header isLoggedIn={false} />);
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('creates the logoutSection when the user is logged in', () => {
    const wrapper = shallow(<Header isLoggedIn={true} userEmail="user@example.com" />);
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome user@example.com (logout)');
  });
});
