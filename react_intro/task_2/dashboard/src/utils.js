// Gets the full year
export function getFullYear() {
  return new Date().getFullYear();
}

// Gets the footer copy
export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

// Returns a string for notifications
export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
