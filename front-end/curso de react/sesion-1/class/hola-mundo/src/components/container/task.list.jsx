import React, { useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import "../../styles/tasks.css";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example2",
    "Description1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description2",
    true,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description3",
    true,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTaks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // Ciclo de vida del componente
  useEffect(() => {
    console.log("Component has been created succesful");
    setLoading(false);
    return () => {
      console.log("Component is going to unmount");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log('Complete this task: ', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks]
    tempTask[index].iscompleted = !tempTask[index].iscompleted;
    // Actualizando el estado del componente lo cual actualiza la tarea
    setTaks(tempTask)
  }

  function deleteTask(task) {
    console.log('Task has been deleted', task);
    const index = tasks.indexOf(task)
    const tempTask = [...tasks]
    tempTask.splice(index, 1)
    setTaks(tempTask)
  }

  function addTask(task) {
    console.log('Task added', task);
    const index = tasks.indexOf(task)
    const tempTask = [...tasks]
    tempTask.push(task)
    setTaks(tempTask)
  }
  
  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>Your task:</h5>
          </div>
          <div
            className="card-body"
            data-mbd-perfect-scrollbar
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => {
                  return (
                    <TaskComponent key={index} task={task} complete={completedTask} remove={deleteTask}></TaskComponent>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TaskForm add={addTask}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
