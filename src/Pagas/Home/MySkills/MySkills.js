import React from "react";
import skills from "../../../Assets/image/skills.svg";

const MySkills = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h3 className="my-20 text-5xl text-center text-primary">My Skills</h3>
        <div class="hero my-20">
          <div class="hero-content flex-col lg:flex-row">
            <div className="lg:w-6/12 w-8/12 mx-10">
              <img src={skills} class="" alt="" />
            </div>
            <div className="lg:w-6/12 w-8/12 mx-10">
              <div className="card bg-base-100 shadow-xl flex justify-center mx-auto">
                <div className="card-body mx-auto">
                  <h1>HTML</h1>
                  <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                  <h1>CSS</h1>
                  <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                  <h1>Bootstrap</h1>
                  <progress class="progress progress-primary w-56" value="85" max="100"></progress>
                  <h1>Tailwind CSS</h1>
                  <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                  <h1>JavaScript</h1>
                  <progress class="progress progress-primary w-56" value="70" max="100"></progress>
                  <h1>React JS</h1>
                  <progress class="progress progress-primary w-56" value="55" max="100"></progress>
                  <h1>Node JS</h1>
                  <progress class="progress progress-primary w-56" value="40" max="100"></progress>
                  <h1>Mongo DB</h1>
                  <progress class="progress progress-primary w-56" value="45" max="100"></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
