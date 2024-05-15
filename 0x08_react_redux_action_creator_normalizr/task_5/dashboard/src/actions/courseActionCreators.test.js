import { selectCourse, unSelect, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  it('selectCourse returns the correct action type and index', () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse returns the correct action type and index', () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
