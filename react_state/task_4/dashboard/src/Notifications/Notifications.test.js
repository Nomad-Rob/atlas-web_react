import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  // Suppress Aphrodite style injection during tests to prevent side effects
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} handleDisplayDrawer={() => {}} handleHideDrawer={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls handleDisplayDrawer when "Your notifications" button is clicked', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        listNotifications={[]}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={() => {}}
        displayDrawer={false}
      />
    );
    wrapper.find('.menuItem').simulate('click'); // Ensure your click target has a correct selector
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawerMock}
        displayDrawer={true}
      />
    );
    wrapper.find('button').simulate('click'); // Adjust if your button has a specific class or id
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('does not render notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[{id: 1, type: 'default', value: 'New course available'}]} handleDisplayDrawer={() => {}} handleHideDrawer={() => {}} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders notifications when displayDrawer is true', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'Session starting soon!' }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} handleDisplayDrawer={() => {}} handleHideDrawer={() => {}} />);
    expect(wrapper.find(NotificationItem).length).toBe(notifications.length);
  });

  it('calls markNotificationAsRead when a notification is clicked', () => {
    const markNotificationAsReadMock = jest.fn();
    const notifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={notifications}
        markNotificationAsRead={markNotificationAsReadMock}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
      />
    );
    wrapper.find(NotificationItem).simulate('click');
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });
});
