import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('calls markAsRead with correct id', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[{ id: 123, type: 'default', value: 'Test Notification' }]} />);
    wrapper.instance().markAsRead(123);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 123 has been marked as read');
    consoleSpy.mockRestore();
  });
});
