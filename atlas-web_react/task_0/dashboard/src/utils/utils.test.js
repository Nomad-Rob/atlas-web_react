// src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils functions', () => {
  // Test for getFullYear
  test('getFullYear returns the current year', () => {
    const year = new Date().getFullYear(); // This prevents a time bomb by always checking against the current year
    expect(getFullYear()).toBe(year);
  });

  // Tests for getFooterCopy
  describe('getFooterCopy', () => {
    test('returns "Holberton School" when true', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns "Holberton School main dashboard" when false', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  // Test for getLatestNotification
  test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});
