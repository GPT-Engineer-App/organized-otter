import React from "react";
import TaskDetailsModal from "./TaskDetailsModal";

const TaskItem = ({ task }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div>
        <input type="checkbox" className="mr-2" />
        <span>{task.title}</span>
      </div>
      <div>
        <span className="text-sm text-gray-500 mr-2">{task.dueDate}</span>
        <span className="text-sm text-red-500">{task.priority}</span>
        <TaskDetailsModal task={task} />
      </div>
    </li>
  );
};

export default TaskItem;