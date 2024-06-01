import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer isLoggedIn={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display the Contact us link when the user is logged out', () => {
    const wrapper = shallow(<Footer isLoggedIn={false} />);
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
  });

  it('displays the Contact us link when the user is logged in', () => {
    const wrapper = shallow(<Footer isLoggedIn={true} />);
    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
  });
});
