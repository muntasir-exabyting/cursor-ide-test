import React from 'react';
import { Link } from 'react-router-dom';

const Todo = props => (
  <tr>
    <td>{props.todo.title}</td>
    <td>{props.todo.description}</td>
    <td>{props.todo.completed ? 'Completed' : 'Pending'}</td>
    <td>
      <Link to={"/edit/"+props.todo._id} className="btn btn-info">edit</Link> {/* Added Bootstrap classes */}
      {' '}{/* Add a space between buttons */}
      <button onClick={() => { props.deleteTodo(props.todo._id) }} className="btn btn-danger">delete</button> {/* Added Bootstrap classes */}
    </td>
  </tr>
)

export default Todo; 