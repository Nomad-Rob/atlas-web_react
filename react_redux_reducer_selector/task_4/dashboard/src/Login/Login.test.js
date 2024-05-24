import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

configure({ adapter: new Adapter() }); // Configure enzyme to use the adapter

describe('Login', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3); // Includes the submit button
    expect(wrapper.find('label').length).toBe(2);
  });

  it('should handle email and password input', () => {
    const wrapper = mount(<Login />);
    const emailInput = wrapper.find('input[type="text"]');
    const passwordInput = wrapper.find('input[type="password"]');
    
    emailInput.simulate('change', { target: { value: 'user@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });
    
    expect(wrapper.state('email')).toEqual('user@example.com');
    expect(wrapper.state('password')).toEqual('password');
  });

  it('enables submit button when both email and password are provided', () => {
    const wrapper = mount(<Login />);
    wrapper.find('input[type="text"]').simulate('change', { target: { value: 'user@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('form submission calls handleLoginSubmit', () => {
    const wrapper = mount(<Login />);
    const form = wrapper.find('form');
    const mockSubmit = jest.fn();
    wrapper.instance().handleLoginSubmit = mockSubmit;
    wrapper.instance().forceUpdate(); // Necessary to make sure the mocked function is used
    form.simulate('submit');
    
    expect(mockValue).toHaveBeenCalled();
  });
});
