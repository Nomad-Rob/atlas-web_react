import { fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  entities: {},
  ids: []
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalized = coursesNormalizer(action.data);
      return state.merge({
        entities: normalized.entities.courses,
        ids: normalized.result
      });

    case SELECT_COURSE:
      return state.setIn(['entities', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['entities', action.index, 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
