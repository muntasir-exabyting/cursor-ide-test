import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';

import TodosList from "./components/TodosList";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [refreshTodos, setRefreshTodos] = useState(0);

  const handleCreateClose = () => setShowCreateModal(false);
  const handleCreateShow = () => setShowCreateModal(true);

  const handleTodoCreated = (newTodo) => {
    setRefreshTodos(prev => prev + 1); // Trigger refresh in TodosList
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">Todo App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="navbar-item">
                <Button variant="outline-light" onClick={handleCreateShow} className="btn-sm">
                  Create New Todo
                </Button>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Routes>
          <Route path="/" exact element={<TodosList refreshTrigger={refreshTodos} />} />
        </Routes>

        {/* Create Todo Modal */}
        <Modal show={showCreateModal} onHide={handleCreateClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateTodo onClose={handleCreateClose} onTodoCreated={handleTodoCreated} />
          </Modal.Body>
        </Modal>
      </div>
    </Router>
  );
}

export default App;
