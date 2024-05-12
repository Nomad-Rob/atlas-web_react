import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
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
    // Only update if new list is longer than the current list
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    return (
      <div className='Notifications'>
        <ul>
          {this.props.listNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
              markAsRead={this.props.markAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string
    }),
    markAsRead: PropTypes.func
  })),
  markAsRead: PropTypes.func
};

Notifications.defaultProps = {
  listNotifications: [],
  markAsRead: () => {}
};

export default Notifications;
