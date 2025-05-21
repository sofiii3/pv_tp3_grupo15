import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList'; // Importamos TaskList
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // Estado para la lista de tareas

  const handleAddTask = (newTask) => {
    // Función para agregar una nueva tarea a la lista
    setTasks([...tasks, { text: newTask, completed: false, id: Date.now() }]); // Agregamos un ID único
  };

  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

  return (
    <div className="app-container"> {/* Agregamos un contenedor para centrar */}
      <h1>Lista de Tareas</h1>
      <TaskInput onAddTask={handleAddTask} /> {/* Pasamos la función a TaskInput */}
      <TaskList 
        tasks={tasks} 
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      /> {/* Pasamos la lista de tareas y las funciones a TaskList */}
    </div>
  );
}

export default App;
