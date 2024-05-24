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
  const { notifications, messages } = entities;
  
  let results = [];
  for (let id in notifications) {
    if (notifications.hasOwnProperty(id) && notifications[id].author.id === userId) {
      const message = messages[notifications[id].context.guid];
      results.push(message);
    }
  }
  return results;
}

// Function that takes data as argument and nomralize it with the noticiation schema
function notificationsNormalizer(data) {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
}
export { normalizedData, getAllNotificationsByUser, notificationsNormalizer};
