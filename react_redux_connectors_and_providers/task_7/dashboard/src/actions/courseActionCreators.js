import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

// Function to handle selecting a course
export function selectCourse(index) {
  return function(dispatch) {
    dispatch({
      type: SELECT_COURSE,
      index
    });
  };
}

// Function to handle unselecting a course
export function unSelectCourse(index) {
  return function(dispatch) {
    dispatch({
      type: UNSELECT_COURSE,
      index
    });
  };
}

// Function to fetch courses from the server
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

// Action to set courses data upon successful fetch
export function setCourses(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data
  };
}
