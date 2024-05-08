import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders correctly with no courses', () => {
    const { getByText } = render(<CourseList />);
    expect(getByText('No course available yet')).toBeInTheDocument();
  });

  it('renders correctly with course data', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const { getByText } = render(<CourseList listCourses={courses} />);
    expect(getByText('ES6')).toBeInTheDocument();
    expect(getByText('60')).toBeInTheDocument();
  });
});
