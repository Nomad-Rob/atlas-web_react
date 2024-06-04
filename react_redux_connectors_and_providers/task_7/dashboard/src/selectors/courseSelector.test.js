import { fromJS } from 'immutable';
import { courseSelector } from './courseSelector';

describe('courseSelector Tests', () => {
  it('should return an empty List when there are no courses', () => {
    const mockState = fromJS({
      courses: {
        entities: {}
      }
    });
    expect(courseSelector(mockState).isEmpty()).toBe(true);
  });

  it('should return a List of courses', () => {
    const mockState = fromJS({
      courses: {
        entities: {
          1: { id: 1, name: 'Course 1' },
          2: { id: 2, name: 'Course 2' }
        }
      }
    });
    const result = courseSelector(mockState);
    expect(result.size).toBe(2);
    expect(result.get(0).get('name')).toBe('Course 1');
    expect(result.get(1).get('name')).toBe('Course 2');
  });
});
