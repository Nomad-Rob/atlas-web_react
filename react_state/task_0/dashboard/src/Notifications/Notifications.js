import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

// Define keyframes for the animations using Aphrodite
const fadeIn = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
};

const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

// Define styles using Aphrodite
const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    right: 0,
    top: 0,
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
      animationTimingFunction: 'ease, ease-in-out',
    },
  },
  notifications: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    border: '3px dotted red',
    '@media (max-width: 900px)': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0, // Full screen on small devices
    },
  },
  notificationsContentUl: {
    paddingLeft: '2.3rem',
    '@media (max-width: 900px)': {
      paddingLeft: '0', // No padding on small screens
    },
  },
  notificationDefault: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    fontSize: '0.8rem',
    color: '#1d1d7f',
    '@media (max-width: 900px)': {
      fontSize: '20px', // Larger font size on small screens
    },
  },
  notificationUrgent: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    fontSize: '0.8rem',
    color: 'red',
    '@media (max-width: 900px)': {
    fontSize: '20px', // Larger font size on small screens
    },
  },
  thirdChild: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    fontSize: '0.9rem',
    color: 'red',
    '@media (max-width: 900px)': {
      fontSize: '20px', // Larger font size on small screens
    },
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    // Allow rerender for displayDrawer state changes or if the notification list grows
    return nextProps.displayDrawer !== this.props.displayDrawer || nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications, markAsRead, handleDisplayDrawer, handleHideDrawer, displayDrawer } = this.props;

    return (
      <div className={css(styles.menuItem)} onClick={handleDisplayDrawer} style={{ display: 'block' }}>
        <div className="Notifications" style={{ display: displayDrawer ? 'block' : 'none' }}>
          <button onClick={handleHideDrawer}>Close</button>
          <ul className={css(styles.notificationsContentUl)}>
            {listNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={markAsRead}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};
