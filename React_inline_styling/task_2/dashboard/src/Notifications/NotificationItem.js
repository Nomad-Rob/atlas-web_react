import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define the styles as you have
const styles = StyleSheet.create({
  listDefault: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'blue',
  },
  listUrgent: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.8rem',
    color: 'red',
  },
  listHtml: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    fontWeight: '400',
    fontSize: '0.9rem',
    color: 'red',
  },
});

function NotificationItem({ id, type, value, html, markAsRead }) {
  const handleClick = () => markAsRead(id);

  // Apply styles conditionally
  const style = css(
    type === 'urgent' ? styles.listUrgent : styles.listDefault,
    html ? styles.listHtml : null
  );

  if (html) {
    return (
      <li data-notification-type={type} className={style} dangerouslySetInnerHTML={html} onClick={handleClick} />
    );
  }
  return (
    <li data-notification-type={type} className={style} onClick={handleClick}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
};

export default React.memo(NotificationItem);
