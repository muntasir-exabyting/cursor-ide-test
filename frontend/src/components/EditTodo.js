import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001/todos/' + id)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCompleted(response.data.completed);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedTodo = {
      title: title,
      description: description,
      completed: completed,
    };

    console.log(updatedTodo);

    axios.post('http://localhost:5001/todos/update/' + id, updatedTodo)
      .then(res => console.log(res.data));

    navigate('/');
  };

  return (
    <div>
      <h3>Edit Todo</h3>
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
          <label>Completed: </label>
          <input 
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input type="submit" value="Update Todo" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default EditTodo; 