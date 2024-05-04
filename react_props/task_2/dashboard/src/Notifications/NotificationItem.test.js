import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct html from type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toBe('default');
    expect(wrapper.text()).toBe('test');
  });

  it('renders correct html from html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
