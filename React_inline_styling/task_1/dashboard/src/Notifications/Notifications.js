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
  },
  paragraph: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    padding: '1.5rem 0 0.3rem 0.8rem',
    margin: 0,
    fontSize: '0.8rem',
  },
  notificationsContentUl: {
    paddingLeft: '2.3rem',
  },
  notificationDefault: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    fontSize: '0.8rem',
    color: '#1d1d7f',
  },
  notificationUrgent: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    fontSize: '0.8rem',
    color: 'red',
  },
  thirdChild: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: 400,
    fontSize: '0.9rem',
    color: 'red',
  }
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
