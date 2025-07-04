import React, { useState } from 'react';

function Todo({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div onClick={toggleCompleted} style={{ 
      border: '3px solid black', 
      borderRadius: '5px', 
      padding: '10px', 
      margin: '10px ', 
      cursor: 'pointer',
      backgroundColor: completed ? 'green' : 'orange',
      color: completed ?'white':'black'
    }}>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Completed: {completed ? 'Yes' : 'No'}</p>
    </div>
    
  );
}

export default Todo;
