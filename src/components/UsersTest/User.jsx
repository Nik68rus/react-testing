import React from 'react';

const User = ({ user, onDelete }) => {
  return (
    <li>
      <p>{user.name}</p>
      <button id="delete-btn" onClick={onDelete.bind(this, user.id)}>
        Delete
      </button>
    </li>
  );
};

export default User;
