import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('should trigger markAsRead when clicked', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={101} type="default" value="Hello World" markAsRead={markAsReadSpy} />);
    wrapper.find('li').simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(101);
  });
});
