import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { name, short, date,img } = project;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <div>
            <img className="w-screen" src={img} alt="" srcSet="" />
          </div>
          <div>
            <h2 className="text-4xl text-primary mx-auto py-3">{name}</h2>
            <h2 className="text-2xl mx-auto py-3">{date}</h2>
            <p className="my-2">{short.slice(0,50)}</p>
          </div>
          <div className="mx-auto">
            <Link className="btn btn-primary text-white mt-10" to="">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
