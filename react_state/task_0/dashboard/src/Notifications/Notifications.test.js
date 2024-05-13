import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

describe('Notifications', () => {
  // Suppress Aphrodite style injection during tests to prevent side effects
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('does not rerender when the list of notifications does not grow', () => {
    const initialProps = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Session starting soon!' }
      ],
      displayDrawer: false,
      handleDisplayDrawer: jest.fn(),
      handleHideDrawer: jest.fn()
    };
    const wrapper = shallow(<Notifications {...initialProps} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ ...initialProps });

    expect(shouldUpdate).toBe(false);
  });

  it('does rerender when the list of notifications grows', () => {
    const initialProps = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Session starting soon!' }
      ],
      displayDrawer: false,
      handleDisplayDrawer: jest.fn(),
      handleHideDrawer: jest.fn()
    };
    const newProps = {
      listNotifications: [
        ...initialProps.listNotifications,
        { id: 3, type: 'urgent', value: 'End of course evaluations' }
      ],
      displayDrawer: false,
      handleDisplayDrawer: jest.fn(),
      handleHideDrawer: jest.fn()
    };
    const wrapper = shallow(<Notifications {...initialProps} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(newProps);

    expect(shouldUpdate).toBe(true);
  });

  it('calls handleDisplayDrawer when "Your notifications" button is clicked', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={[]} handleDisplayDrawer={handleDisplayDrawerMock} handleHideDrawer={() => {}} displayDrawer={false} />);
    wrapper.find('div.menuItem').simulate('click'); // Assuming your button to show notifications has a class "menuItem"
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={[]} handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawerMock} displayDrawer={true} />);
    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
