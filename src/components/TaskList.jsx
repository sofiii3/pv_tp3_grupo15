import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p className="empty-list">No hay tareas por mostrar.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
