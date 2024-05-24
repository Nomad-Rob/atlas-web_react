import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  beforeEach(() => {
    // Suppress style injection to prevent Aphrodite from adding styles to the DOM
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    // Clear any styles that Aphrodite might have tried to add
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders BodySection correctly with passed props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="my title">
        <p>child content</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);
    expect(bodySection.prop('title')).toEqual('my title');

    // Ensuring exact match of children
    // Note: Enzyme does not have a `containsExactly` method; use `equals` for exact matches
    expect(bodySection.find('p').text()).toEqual('child content');
  });
});
