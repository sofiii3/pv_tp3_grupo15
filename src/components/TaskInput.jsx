import React, { useState } from "react";
import './TaskInput.css'; 

const TaskInput = ({ onAddTask }) => { 
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea.trim() !== "") {
      onAddTask(tarea); 
      setTarea(""); 
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="nuevaTarea">Agrega una nueva Tarea: </label>
      <input
        type="text"
        id="nuevaTarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribí una tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskInput;