import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

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
    <td>
      <span className={`status-icon ${props.todo.completed ? 'completed' : 'pending'}`}>
        <FontAwesomeIcon 
          icon={props.todo.completed ? faCircleCheck : faCircleXmark} 
          className="me-2"
        />
        {props.todo.completed ? 'Completed' : 'Pending'}
      </span>
    </td>
    <td>
      <Button variant="info" onClick={() => props.onEdit(props.todo)} className="me-2">edit</Button>
      <Button variant="danger" onClick={props.deleteTodo}>delete</Button>
    </td>
  </tr>
)

export default Todo; 