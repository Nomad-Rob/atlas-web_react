import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className="menuItem">
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <div className="Notifications-content">
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                    id={notification.id}
                  />
                ))}
              </ul>
            </div>
            <button
              aria-label="Close"
              className="close-button"
              onClick={() => console.log("close button has been clicked")}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array.isRequired
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
