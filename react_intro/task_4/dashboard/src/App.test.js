import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/some text in your component/i)).toBeInTheDocument();
});

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders App-header div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toEqual(1);
  });

  it('renders App-body div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').length).toEqual(1);
  });

  it('renders App-footer div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toEqual(1);
  });
});
