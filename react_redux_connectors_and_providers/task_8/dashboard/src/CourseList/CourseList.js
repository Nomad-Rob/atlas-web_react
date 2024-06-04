import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { courseSelector } from '../selectors/courseSelector';
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


function CourseList({ courses, fetchCourses, selectCourse, unSelectCourse }) {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  function onChangeRow(id, checked) {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  }

  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow textFirstCell='No course available yet' isHeader={false} />
        ) : (
          courses.map(course => (
            <CourseListRow key={course.id}
                           textFirstCell={course.name}
                           textSecondCell={course.credit}
                           isHeader={false}
                           isChecked={course.isSelected}
                           onChange={(checked) => onChangeRow(course.id, checked)}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  courses: courseSelector(state)
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
