import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from './Todo';
import { Button, Modal } from 'react-bootstrap';
import CreateTodo from './CreateTodo';

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const fetchTodos = () => {
    axios.get('http://localhost:5001/todos/')
      .then(response => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const handleTodoCreated = (newTodo) => {
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = (id) => {
    axios.delete('http://localhost:5001/todos/' + id)
      .then(response => {
        console.log(response.data);
        fetchTodos();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const todosList = () => {
    return todos.map(currenttodo => {
      return <Todo todo={currenttodo} deleteTodo={deleteTodo} key={currenttodo._id}/>;
    })
  };

  return (
    <div>
      <h3>Logged Todos</h3>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Create New Todo
      </Button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { todosList() }
        </tbody>
      </table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTodo onClose={handleClose} onTodoCreated={handleTodoCreated} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default TodosList; 