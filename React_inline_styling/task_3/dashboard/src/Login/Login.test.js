import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('Login', () => {
  beforeEach(() => {
    // Suppress style injection before each test to prevent Aphrodite from affecting the DOM
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    // Clear any styles that Aphrodite might have tried to add, resuming normal operation
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
  });
});
