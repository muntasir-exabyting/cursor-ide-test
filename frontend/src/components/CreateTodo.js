import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = ({ onClose, onTodoCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: title,
      description: description,
      completed: false,
    };

    axios.post('http://localhost:5001/todos/add', newTodo)
      .then(res => {
        console.log(res.data);
        if (onTodoCreated) onTodoCreated(res.data);
        if (onClose) onClose();
      })
      .catch(error => {
        console.log(error);
      });

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title: </label>
        <input 
          type="text"
          required
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input 
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Create Todo" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default CreateTodo; 