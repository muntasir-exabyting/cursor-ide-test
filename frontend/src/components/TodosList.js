import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from './Todo';

const TodosList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/todos/')
      .then(response => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const deleteTodo = (id) => {
    axios.delete('http://localhost:5001/todos/' + id)
      .then(response => { console.log(response.data)});

    setTodos(todos.filter(el => el._id !== id));
  };

  const todosList = () => {
    return todos.map(currenttodo => {
      return <Todo todo={currenttodo} deleteTodo={deleteTodo} key={currenttodo._id}/>;
    })
  };

  return (
    <div>
      <h3>Logged Todos</h3>
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
    </div>
  );
};

export default TodosList; 