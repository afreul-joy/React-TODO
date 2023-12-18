import React, { useState } from "react";
import TaskList from "../../Components/TaskList/TaskList";
import TaskForm from "../../Components/TaskForm/TaskForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateTaskModal from "../../Components/TaskList/UpdateTaskModal";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [updateTaskData, setUpdateTaskData] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order is ascending

  const addTask = (task) => {
    setTasks([task, ...tasks]);
    toast.success("Task updated successfully");
  };

  const updateTask = (taskId, updatedTask) => {
    setUpdateTaskData({ taskId, taskText: updatedTask });
    setUpdateModalOpen(true);
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = [
      { id: updateTaskData.taskId, text: updatedTask },
      ...tasks.filter((task) => task.id !== updateTaskData.taskId),
    ];
    setTasks(updatedTasks);
    setUpdateModalOpen(false);
    toast.success("Task updated successfully");
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
    toast.error("Task deleted successfully");
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort tasks based on task text and sort order
  const sortedTasks = filteredTasks.sort((a, b) => {
    const comparison = a.text.localeCompare(b.text);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Add Your task</h1>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Sort order dropdown */}
      <div className="mb-4">
        <label className="mr-2">Sort Order:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <TaskForm addTask={addTask} />
      <TaskList tasks={sortedTasks} updateTask={updateTask} deleteTask={deleteTask} />

      {/* Update Task Modal */}
      {isUpdateModalOpen && (
        <UpdateTaskModal
          isOpen={isUpdateModalOpen}
          onClose={() => setUpdateModalOpen(false)}
          initialTaskText={updateTaskData.taskText}
          onUpdate={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default Todo;
