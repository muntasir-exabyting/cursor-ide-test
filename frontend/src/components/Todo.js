import React from 'react';
import { Button } from 'react-bootstrap';

const Todo = props => (
  <tr>
    <td>{props.todo.title}</td>
    <td>{props.todo.description}</td>
    <td>{props.todo.completed ? 'Completed' : 'Pending'}</td>
    <td>
      <Button variant="info" onClick={() => props.onEdit(props.todo)} className="me-2">edit</Button>
      <Button 
        variant={props.todo.completed ? "secondary" : "success"} 
        onClick={() => props.onToggleComplete(props.todo)} 
        className="me-2"
      >
        {props.todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </Button>
      <Button variant="danger" onClick={() => props.deleteTodo(props.todo._id)}>delete</Button>
    </td>
  </tr>
)

export default Todo; 