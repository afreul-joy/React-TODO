/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [strikethroughTasks, setStrikethroughTasks] = useState([]);

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

  const activeTasks = tasks.filter((task) => !strikethroughTasks.includes(task.id));
  const completedTasks = tasks.filter((task) => strikethroughTasks.includes(task.id));

  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-bold mb-2">Active Tasks</h2>
      <table className="w-full table-auto my-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/8 p-2 border border-gray-300">Index</th>
            <th className="w-1/8 p-2 border border-gray-300">Strike</th>
            <th className="w-3/4 p-2 border border-gray-300">Task</th>
            <th className="w-1/8 p-2 border border-gray-300">Update</th>
            <th className="w-1/8 p-2 border border-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          {activeTasks.map((task, index) => (
            <tr className="text-center" key={task.id}>
              <td className="p-2 border border-gray-300">{index + 1}</td>
              <td className="p-2 border border-gray-300">
                <input
                  type="checkbox"
                  checked={strikethroughTasks.includes(task.id)}
                  onChange={() => handleStrikeTask(task.id)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </td>
              <td className={`p-2 border border-gray-300 ${strikethroughTasks.includes(task.id) ? "line-through" : ""}`}>
                {task.text}
              </td>
              <td className="p-2 border border-gray-300">
                <button
                  onClick={() => updateTask(task.id, task.text)}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
                >
                  <AiOutlineEdit />
                </button>
              </td>
              <td className="p-2 border border-gray-300">
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

      <h2 className="text-xl font-bold mb-2">Completed Tasks</h2>
      <table className="w-full table-auto my-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/8 p-2 border border-gray-300">Index</th>
            <th className="w-3/4 p-2 border border-gray-300">Task</th>
            <th className="w-1/8 p-2 border border-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.map((task, index) => (
            <tr className="text-center" key={task.id}>
              <td className="p-2 border border-gray-300">{index + 1}</td>
              <td className={`p-2 border border-gray-300 ${strikethroughTasks.includes(task.id) ? "line-through" : ""}`}>
                {task.text}
              </td>
              <td className="p-2 border border-gray-300">
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
    </div>
  );
};

export default TaskList;
