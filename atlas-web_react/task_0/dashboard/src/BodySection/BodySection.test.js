import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders an h2 and p element with correct data', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check for one h2 element with the correct title
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Check for one p element with the correct text
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
