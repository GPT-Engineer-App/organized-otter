import React, { useState } from "react";

const AddTaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a task"
        className="w-full p-2 border rounded"
      />
      <button onClick={handleAddTask} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </div>
  );
};

export default AddTaskInput;