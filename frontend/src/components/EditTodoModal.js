import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditTodoModal = ({ show, handleClose, todo, onTodoUpdated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedTodo = {
      title: title,
      description: description,
      completed: todo.completed, // Preserve the existing completed status
    };

    axios.post('http://localhost:5001/todos/update/' + todo._id, updatedTodo)
      .then(res => {
        console.log(res.data);
        onTodoUpdated(res.data); // Pass the updated todo back to parent
        handleClose(); // Close the modal
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              Update Todo
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTodoModal;