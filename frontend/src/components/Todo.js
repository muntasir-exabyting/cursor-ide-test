import React from 'react';
import { Button } from 'react-bootstrap';

const Todo = props => (
  <tr>
    <td className="text-center">
      <input 
        type="checkbox" 
        checked={props.todo.completed}
        onChange={() => props.onToggleComplete(props.todo)}
        style={{ transform: 'scale(1.3)', cursor: 'pointer' }}
      />
    </td>
    <td>{props.todo.title}</td>
    <td>{props.todo.description}</td>
    <td>{props.todo.completed ? 'Completed' : 'Pending'}</td>
    <td>
      <Button variant="info" onClick={() => props.onEdit(props.todo)} className="me-2">edit</Button>
      <Button variant="danger" onClick={() => props.deleteTodo(props.todo._id)}>delete</Button>
    </td>
  </tr>
)

export default Todo; 