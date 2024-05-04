import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications" style={{ position: 'relative', padding: '10px', marginBottom: '20px' }}>
      <button 
        style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} 
        aria-label="Close"
        onClick={handleClick}>
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
