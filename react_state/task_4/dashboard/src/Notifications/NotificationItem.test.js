import React from 'react';
import { shallow, mount } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('NotificationItem', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders with type and value props', () => {
    const type = "default";
    const value = "test";
    const wrapper = shallow(<NotificationItem type={type} value={value} />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual(type);
    expect(wrapper.text()).toContain(value);
  });

  it('renders with html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('calls markAsRead with the right id when clicked', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsReadSpy} />);
    wrapper.simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
})
