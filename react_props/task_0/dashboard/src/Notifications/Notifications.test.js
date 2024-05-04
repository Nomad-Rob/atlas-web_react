import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  // Test to check if the Notifications component renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test to check if it contains the expected text
  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.contains("Here is the list of notifications")).toEqual(true);
  });

  // Test to ensure it renders three list items (modify this depending on your actual implementation)
  it('renders three list items', () => {
    expect(wrapper.find('li').length).toEqual(3); // Adjust based on the number of items your component actually renders
  });
});
