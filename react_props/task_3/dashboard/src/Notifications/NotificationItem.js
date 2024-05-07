import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  const itemProps = html ? { dangerouslySetInnerHTML: html } : { children: value };
  return (
    <li data-notification-type={type} {...itemProps} />
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

export default NotificationItem;
