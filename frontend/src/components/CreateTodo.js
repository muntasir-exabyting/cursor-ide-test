import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: title,
      description: description,
      completed: false, // New todos are initially not completed
    };

    console.log(newTodo);

    axios.post('http://localhost:5001/todos/add', newTodo)
      .then(res => console.log(res.data));

    // Clear the form
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h3>Create New Todo</h3>
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
    </div>
  );
};

export default CreateTodo; 