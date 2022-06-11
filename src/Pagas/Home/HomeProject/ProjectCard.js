import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { _id,name, desc1, date, img1, status,tools } = project;
  return (
    <div className="">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div>
            <img className="w-screen" src={img1} alt="" srcSet="" />
          </div>
          <div>
            <h2 className="text-4xl text-primary mx-auto py-3">{name}</h2>
            <h2 className="text-xl text-primary mx-auto py-3">Status:{status}</h2>
            <h2 className="text-xs mx-auto py-3">Date: {date}</h2>
            <p className="my-2"> ● {desc1}</p>
            <p className="my-2">Tools: {tools}</p>
          </div>
          <div className="mx-auto">
            <Link className="btn btn-primary text-white mt-10" to={`/project/${_id}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
