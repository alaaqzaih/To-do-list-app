import React, { useState } from 'react';
import TodoForm from './TodoForm';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;
    addTodo({
      text,
      description
    });
    setText('');
    setDescription('');
  };

  return (
    <div>
      <TodoForm onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter task name'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter task description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className='todo-button'>Add task</button>
      </TodoForm>
    </div>
  );
};

export default AddTodo;
