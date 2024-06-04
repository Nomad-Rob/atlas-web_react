import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CourseList', () => {
  let store;

  beforeEach(() => {
    // Suppress style injection and prepare the store
    StyleSheetTestUtils.suppressStyleInjection();
    store = mockStore({
      courses: []
    });
    store.dispatch = jest.fn();
  });

  afterEach(() => {
    // Clear any styles that Aphrodite might have tried to add
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders correctly with no courses', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(getByText('No course available yet')).toBeInTheDocument();
  });

  it('renders correctly with course data', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    store = mockStore({
      courses
    });
    const { getByText } = render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(getByText('ES6')).toBeInTheDocument();
    expect(getByText('60')).toBeInTheDocument();
  });

  it('dispatches fetchCourses when the component is mounted', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledWith(fetchCourses());
  });

  it('correctly dispatches actions when onChangeRow is called', () => {
    const courses = [
      { id: '1', name: 'ES6', credit: 60, isSelected: false },
      { id: '2', name: 'Webpack', credit: 20, isSelected: false },
    ];
    store = mockStore({
      courses
    });
    const { getAllByRole } = render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkboxes = getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(store.dispatch).toHaveBeenCalledWith(selectCourse('1'));
    fireEvent.click(checkboxes[0]);
    expect(store.dispatch).toHaveBeenCalledWith(unSelectCourse('1'));
  });
});
