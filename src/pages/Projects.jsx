import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      {/* Add Project Button */}
      <div className="mb-4">
        <button className="p-2 bg-blue-500 text-white rounded">Add Project</button>
      </div>
      {/* Project List */}
      <ul>
        {/* Project Item */}
        <li className="p-2 border-b">
          <span>Project Title</span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;