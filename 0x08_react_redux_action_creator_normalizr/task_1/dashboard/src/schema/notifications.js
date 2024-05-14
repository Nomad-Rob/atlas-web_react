// src/schema/notifications.js
import { normalize, schema } from 'normalizr';
import notificationData from '../notifications.json';

// Define the user schema
const user = new schema.Entity("users");

// Define the message schema
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
});

// Define the notification schema
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

// Normalize the entire data
const normalizedData = normalize(notificationData, [notification]);

// Function to get all notifications by user
function getAllNotificationsByUser(userId) {
  const { entities } = normalizedData;
  const { notifications, users, messages } = entities;
  const filteredIds = Object.keys(notifications).filter(id => notifications[id].author === userId);
  return filteredIds.map(id => messages[notifications[id].context]);
}

export { normalizedData, getAllNotificationsByUser };
