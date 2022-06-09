import React from "react";
import "./Banner.css"
import profile from "../../../Assets/image/profile.png";

const Banner = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        <div className="hero py-14">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-6/12">
              <img src={profile} className="  " alt="" />
            </div>
            <div className="w-6/12">
              <h1 className=" text-4xl my-5 font-bold">Hi I'm </h1>
              <h1 className=" text-6xl my-5 font-bold">Abdul Hakim Mia</h1>
              <h1 className=" text-4xl my-5 font-bold text-secondary">Front-End Developer</h1>
              <p className="py-6">
                I'm working as a web designer & front‐end developer focused on crafting clean &
                user‐friendly experiences with modern technology. I am passionate about building an
                excellent website that improves the lives of those around me. I gain skills and
                strong confidence in JavaScript, React js, Node js, Express js, MongoDB, and more.
              </p>
              <button className="btn btn-primary text-white">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
