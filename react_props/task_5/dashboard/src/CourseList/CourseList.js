import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

const CourseList = ({ listCourses }) => (
  <table>
    <tbody>
      {listCourses.length === 0 ? (
        <CourseListRow textFirstCell="No course available yet" />
      ) : (
        listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))
      )}
    </tbody>
  </table>
);

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
