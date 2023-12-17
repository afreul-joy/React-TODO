/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editedTask, setEditedTask] = useState("");
  const [strikethroughTasks, setStrikethroughTasks] = useState([]);

  const handleInputChange = (taskId, value) => {
    setEditedTask({ id: taskId, text: value });
  };

  const handleUpdateTask = () => {
    if (editedTask) {
      updateTask(editedTask.id, editedTask.text);
      setEditedTask("");
    }
  };

  const handleStrikeTask = (taskId) => {
    setStrikethroughTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      if (newTasks.includes(taskId)) {
        newTasks.splice(newTasks.indexOf(taskId), 1);
      } else {
        newTasks.push(taskId);
      }
      return newTasks;
    });
  };

  return (
    <table className="table-fixed w-full my-2">
      <thead>
        <tr>
          <th className="w-1/8">Strike</th>
          <th className="w-3/4">Task</th>
          <th className="w-1/8">Update</th>
          <th className="w-1/8">Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr  className="text-center" key={task.id}>
            <td >
              <input
                type="checkbox"
                checked={strikethroughTasks.includes(task.id)}
                onChange={() => handleStrikeTask(task.id)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
            </td>
            <td>
              <input
                type="text"
                value={editedTask.id === task.id ? editedTask.text : task.text}
                onChange={(e) => handleInputChange(task.id, e.target.value)}
                className={`py-2 px-4 border rounded focus:outline-none w-full ${
                  strikethroughTasks.includes(task.id) ? "line-through" : ""
                }`}
              />
            </td>
            <td>
              <button
                onClick={handleUpdateTask}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
              >
                <AiOutlineEdit />
              </button>
            </td>
            <td>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none"
              >
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
