import React, { useState } from 'react';

function KeysList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ayush' },
    { id: 2, name: 'John' },
  ]);

  const addUser = () => {
    const newUser = {
      id: Date.now(), 
      name: `User ${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li> 
        ))}
      </ul>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default KeysList;
