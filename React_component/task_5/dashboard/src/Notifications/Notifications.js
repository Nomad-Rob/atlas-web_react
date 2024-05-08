import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

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
