import PropTypes from 'prop-types';
import React from 'react';

function NotificationItem({ type, value, html }) {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
  }
  return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
