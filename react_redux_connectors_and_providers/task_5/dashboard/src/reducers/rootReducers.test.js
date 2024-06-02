import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    const initialState = rootReducer(undefined, {});
    
    expect(initialState.get('courses')).toEqual(Map({}));
    expect(initialState.get('notifications')).toEqual(Map({}));
    expect(initialState.get('ui')).toEqual(Map({}));
  });
});
