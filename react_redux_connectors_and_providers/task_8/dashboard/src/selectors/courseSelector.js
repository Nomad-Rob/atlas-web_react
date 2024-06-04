import { createSelector } from 'reselect';
import { List } from 'immutable';

const getCourses = (state) => state.getIn(['courses', 'entities']);

export const courseSelector = createSelector(
  [getCourses],
  (courses) => courses ? courses.valueSeq().toList() : List()
);
