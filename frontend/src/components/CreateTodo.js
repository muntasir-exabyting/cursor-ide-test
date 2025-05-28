import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

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
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit">
          Create Todo
        </Button>
      </div>
    </Form>
  );
};

export default CreateTodo; 