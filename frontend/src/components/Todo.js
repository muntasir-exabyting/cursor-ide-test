import React from 'react';
import { Link } from 'react-router-dom';

const Todo = props => (
  <tr>
    <td>{props.todo.title}</td>
    <td>{props.todo.description}</td>
    <td>{props.todo.completed ? 'Completed' : 'Pending'}</td>
    <td>
      <Link to={"/edit/"+props.todo._id}>edit</Link> | <button onClick={() => { props.deleteTodo(props.todo._id) }}>delete</button>
    </td>
  </tr>
)

export default Todo; 