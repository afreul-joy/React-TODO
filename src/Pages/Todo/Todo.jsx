import React, { useState } from "react";
import TaskList from "../../Components/TaskList/TaskList";
import TaskForm from "../../Components/TaskForm/TaskForm";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]); // LIFO
    // setTasks([...tasks, task]); // FIFO
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: updatedTask } : task
    );
    setTasks(updatedTasks);
    // setTasks([task, ...tasks]);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Add Your task</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default Todo;
