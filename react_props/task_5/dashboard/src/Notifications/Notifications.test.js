import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders no notifications correctly', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('No new notification for now')).toBeInTheDocument();
  });

  it('renders notifications correctly', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'Session starts next week' },
    ];
    const { getByText } = render(<Notifications listNotifications={notifications} />);
    expect(getByText('New course available')).toBeInTheDocument();
    expect(getByText('Session starts next week')).toBeInTheDocument();
  });
});
