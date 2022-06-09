import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const HomeProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto">
      <h3 className="my-20 text-5xl text-center text-primary">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomeProject;
