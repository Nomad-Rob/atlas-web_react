import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/some text in your component/i)).toBeInTheDocument();
});

describe('App', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});
