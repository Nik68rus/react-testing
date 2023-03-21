import React, { useEffect, useState } from 'react';
import User from './User';

const UsersTest = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      {isLoading && <h1 id="loading">Loading...</h1>}
      {users.length ? (
        <ul id="users-list">
          {users.map((user) => (
            <User key={user.id} user={user} onDelete={onDelete} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UsersTest;
