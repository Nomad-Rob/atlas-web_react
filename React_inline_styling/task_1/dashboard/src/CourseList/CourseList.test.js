import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';

describe('CourseList', () => {
  beforeEach(() => {
    // Suppress style injection before each test
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    // Clear any styles that Aphrodite might have tried to add
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

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
