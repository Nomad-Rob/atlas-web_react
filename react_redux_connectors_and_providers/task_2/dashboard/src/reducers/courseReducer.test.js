import { fromJS } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  const initialState = fromJS({
    entities: {},
    ids: []
  });

  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const rawData = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const normalizedData = coursesNormalizer(rawData);
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: rawData
    };
    expect(courseReducer(initialState, action)).toEqual(fromJS({
      entities: normalizedData.entities.courses,
      ids: normalizedData.result
    }));
  });

  it('should handle SELECT_COURSE', () => {
    const state = fromJS({
      entities: {
        '2': { id: 2, name: 'Webpack', isSelected: false, credit: 20 }
      },
      ids: [2]
    });
    const action = {
      type: SELECT_COURSE,
      index: 2
    };
    expect(courseReducer(state, action).getIn(['entities', '2', 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE', () => {
    const state = fromJS({
      entities: {
        '2': { id: 2, name: 'Webpack', isSelected: true, credit: 20 }
      },
      ids: [2]
    });
    const action = {
      type: UNSELECT_COURSE,
      index: 2
    };
    expect(courseReducer(state, action).getIn(['entities', '2', 'isSelected'])).toBe(false);
  });
});
