import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TodosList from "./components/TodosList";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Todo App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Routes>
          <Route path="/" exact element={<TodosList />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
