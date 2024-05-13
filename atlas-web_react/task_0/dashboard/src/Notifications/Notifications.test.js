import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

describe('Notifications', () => {
  beforeEach(() => {
    // Suppress style injection before each test to prevent Aphrodite from affecting the DOM
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    // Clear any styles that Aphrodite might have tried to add, resuming normal operation
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('does not rerender when the list of notifications does not grow', () => {
    const initialProps = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Session starting soon!' }
      ]
    };
    const wrapper = shallow(<Notifications {...initialReplys} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ ...initialProps });

    expect(shouldUpdate).toBe(false);
  });

  it('does rerender when the list of notifications grows', () => {
    const initialProps = {
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'Session starting soon!' }
      ]
    };
    const newProps = {
      listNotifications: [
        ...initialProps.listNotifications,
        { id: 3, type: 'urgent', value: 'End of course evaluations' }
      ]
    };
    const wrapper = shallow(<Notifications {...initialProps} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate(newProps);

    expect(shouldHandlerdate).toBe(true);
  });
});
