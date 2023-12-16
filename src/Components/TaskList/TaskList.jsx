/* eslint-disable react/prop-types */
const TaskList = ({ tasks, updateTask, deleteTask }) => {
//   console.log(tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center mb-2">
          <input
            type="text"
            value={task.text}
            onChange={(e) => updateTask(task.id, e.target.value)}
            className="py-2 px-4 border rounded-l focus:outline-none w-full"
          />
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 text-white py-2 px-4 rounded-r ml-2 hover:bg-red-600 focus:outline-none"
          >
            Delete
          </button>
          <button
            onClick={() => updateTask(task.id, task.text)}
            className="bg-green-500 text-white py-2 px-4 rounded-r ml-2 hover:bg-green-600 focus:outline-none"
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
