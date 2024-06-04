import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCourses } from './courseActionCreators';
import { FETCH_COURSE_SUCCESS } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('courseActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('fetchCourses creates FETCH_COURSE_SUCCESS when fetching courses has been done', () => {
    fetchMock.getOnce('/dist/courses.json', {
      body: { courses: [{ id: 1, name: 'Test Course' }] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: FETCH_COURSE_SUCCESS, data: { courses: [{ id: 1, name: 'Test Course' }] } }
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
