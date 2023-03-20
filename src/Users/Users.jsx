import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    };

    loadUsers();
  }, []);

  return (
    <ul data-testid="users-page">
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`} data-testid="user-item">
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
