import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when isHeader and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th').props().colSpan).toEqual(2);
  });

  it('renders two cells when isHeader and textSecondCell is not null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Details" />);
    expect(wrapper.find('th').length).toEqual(2);
  });

  it('renders two td elements when not header', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data" textSecondCell="More Data" />);
    expect(wrapper.find('td').length).toEqual(2);
  });
});
