import React, { useState } from "react";
import AddTaskInput from "../components/AddTaskInput";
import TaskList from "../components/TaskList";

const Index = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskTitle) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      dueDate: "No due date",
      priority: "Low",
      description: "",
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <AddTaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Index;
