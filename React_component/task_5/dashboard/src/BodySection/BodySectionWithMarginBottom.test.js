import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('renders BodySection correctly with passed props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="my title">
        <p>child content</p>
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);
    expect(bodySection.prop('title')).toEqual('my title');
    expect(bodySection.contains(<p>child content</p>)).toBe(true);
  });
});
