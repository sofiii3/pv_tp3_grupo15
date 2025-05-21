import React from 'react';
import './TaskItem.css'; // Importa los estilos CSS para TaskItem

const TaskItem = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onCompleteTask(task.id)}
        className="task-checkbox"
      />
      <span className="task-text">{task.text}</span>
      <button onClick={() => onDeleteTask(task.id)} className="delete-button">
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
