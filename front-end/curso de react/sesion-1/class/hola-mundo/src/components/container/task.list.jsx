import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/tasks.css'


const TaskListComponent = () => {
  const defaultTask = new Task('Example', 'Default descripcion', false, LEVELS.NORMAL)

  // Estado del componente
  const [tasks, setTaks] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  // Ciclo de vida del componente
  useEffect(() => {
    console.log('Component has been created succesful');
    setLoading(false)
    return () => {
      console.log('Component is going to unmount');
    };
  }, [tasks]);

  const changeState = (id) => {
    console.log('TODO: cambiar el estado de una tarea');
  }

  return (
    <div>
      <div>
        <h1>Your task:</h1>
      </div>
      {/* Aplicar un for/map para renderizar una lista */}
      <TaskComponent task={ defaultTask }></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
