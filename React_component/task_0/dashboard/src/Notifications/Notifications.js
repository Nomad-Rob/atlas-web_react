import React from "react";
import './Notifications.css';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export function Notifications({ displayDrawer }) {
  const handleButtonClick = () => {
    console.log("close button has been clicked");
  };

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
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
            </ul>
          </div>
          <button
            aria-label="Close"
            className="close-button"
            onClick={handleButtonClick}>
              <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
