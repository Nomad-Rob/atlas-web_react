import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    // Suppress style injection before each test
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    // Clear any styles that Aphrodite might have tried to add
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
