import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from './Todo';
import { Button, Modal } from 'react-bootstrap';
import CreateTodo from './CreateTodo';
import EditTodoModal from './EditTodoModal';

const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const handleCreateClose = () => setShowCreateModal(false);
  const handleCreateShow = () => setShowCreateModal(true);
  
  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedTodo(null);
  };
  
  const handleEditShow = (todo) => {
    setSelectedTodo(todo);
    setShowEditModal(true);
  };

  const handleDeleteClose = () => {
    setShowDeleteModal(false);
    setTodoToDelete(null);
  };

  const handleDeleteShow = (todo) => {
    setTodoToDelete(todo);
    setShowDeleteModal(true);
  };

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

  const handleTodoUpdated = (updatedTodo) => {
    fetchTodos();
  };

  const handleToggleComplete = (todo) => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed
    };

    axios.post('http://localhost:5001/todos/update/' + todo._id, updatedTodo)
      .then(response => {
        console.log(response.data);
        fetchTodos();
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = (id) => {
    axios.delete('http://localhost:5001/todos/' + id)
      .then(response => {
        console.log(response.data);
        fetchTodos();
        handleDeleteClose();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const confirmDelete = () => {
    if (todoToDelete) {
      deleteTodo(todoToDelete._id);
    }
  };

  const todosList = () => {
    return todos.map(currenttodo => {
      return <Todo 
        todo={currenttodo} 
        deleteTodo={() => handleDeleteShow(currenttodo)} 
        onEdit={handleEditShow}
        onToggleComplete={handleToggleComplete}
        key={currenttodo._id}
      />;
    })
  };

  return (
    <div>
      <h3>Logged Todos</h3>
      <Button variant="primary" onClick={handleCreateShow} className="mb-3">
        Create New Todo
      </Button>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="text-center">Complete</th>
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

      {/* Create Todo Modal */}
      <Modal show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTodo onClose={handleCreateClose} onTodoCreated={handleTodoCreated} />
        </Modal.Body>
      </Modal>

      {/* Edit Todo Modal */}
      <EditTodoModal
        show={showEditModal}
        handleClose={handleEditClose}
        todo={selectedTodo}
        onTodoUpdated={handleTodoUpdated}
      />

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this todo?</p>
          {todoToDelete && (
            <div className="alert alert-info">
              <strong>Title:</strong> {todoToDelete.title}<br />
              <strong>Description:</strong> {todoToDelete.description || 'No description'}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            No
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodosList; 