const sendNotification = async ({ userEmail, subject, message }) => {
  // Placeholder for real notification logic
  // Could integrate push notifications later (Firebase, OneSignal)
  console.log(`Notification sent to ${userEmail}: ${subject} - ${message}`);
};

module.exports = sendNotification;
