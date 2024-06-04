import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} handleDisplayDrawer={() => {}} handleHideDrawer={() => {}} fetchNotifications={() => {}} />);
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
        fetchNotifications={() => {}}
      />
    );
    wrapper.find('.menuItem').simulate('click');
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
        fetchNotifications={() => {}}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('does not render notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[{id: 1, type: 'default', value: 'New course available'}]} handleDisplayDrawer={() => {}} handleHideDrawer={() => {}} fetchNotifications={() => {}} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it('renders notifications when displayDrawer is true', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'Session starting soon!' }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} handleDisplayDrawer={() => {}} handleHideDrawer={() => {}} fetchNotifications={() => {}} />);
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
        fetchNotifications={() => {}}
      />
    );
    wrapper.find(NotificationItem).simulate('click');
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });

  it('calls fetchNotifications when component mounts', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(
      <Notifications
        displayDrawer={false}
        listNotifications={[]}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={() => {}}
        fetchNotifications={fetchNotificationsMock}
      />
    );
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});
