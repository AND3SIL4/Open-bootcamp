import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default descripcion', false, LEVELS.NORMAL)
  // const changeState = (id) => {
  //   console.log('TODO: cambiar el estado de una tarea');
  // }

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