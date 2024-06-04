import { FETCH_COURSE_SUCCESS } from './courseActionTypes';

export function fetchCourses() {
  return function(dispatch) {
    fetch('/dist/courses.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setCourses(data));
      })
      .catch(error => console.error('Error fetching courses:', error));
  };
}

export function setCourses(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data
  };
}
