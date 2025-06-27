import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Notification = ({ message, type }) => {
  if (!message) return null;
  const variant = type === 'error' ? 'danger' : 'success';
  return (
    <Alert variant={variant} className="mt-4">
      {message}
    </Alert>
  );
};

export default Notification;