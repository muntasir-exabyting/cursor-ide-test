import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TodosList from "./components/TodosList";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">Todo App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Routes>
          <Route path="/" exact element={<TodosList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
