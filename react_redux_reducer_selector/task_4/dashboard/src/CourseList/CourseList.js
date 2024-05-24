import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseList: {
    width: '90%',
    borderCollapse: 'collapse',
    border: '1px solid #e0e0e0',
    margin: '1rem auto',
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
  },
  theadThColspan2: {
    textAlign: 'center',
  },
  theadSecondChildTh: {
    borderTop: '2px solid #e0e0e0',
    borderBottom: '2px solid #e0e0e0',
  },
  theadSecondChildThFirstChild: {
    textAlign: 'left',
    width: '70%',
  },
  theadSecondChildThLastChild: {
    textAlign: 'left',
    width: '30%',
  },
  tbodyTrTd: {
    textAlign: 'left',
  },
  tbodyTrTdLastChild: {
    textAlign: 'left',
  },
});



function CourseList({ listCourses }) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell='No course available yet' isHeader={false} />
        ) : (
          listCourses.map(course => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
