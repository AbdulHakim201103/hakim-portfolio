import React from "react";
import aboutme from "../../Assets/image/aboutme.png";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="hero py-14">
          <div className="hero-content flex-col ">
            <div className="w-6/12">
              <img className="border-4 border-slate-500" src={aboutme} alt="" />
            </div>
            <div className="w-6/12">
              <p className="py-6">
                I am Abdul Hakim Mia.A junior web developer. I like to focus on coding and learning
                new techniques, I did a course from which I learned a lot. I will learn a lot more
                in the future inshallah. Now, I am working on frontend technologies and also working
                on backend technologies. I have completed some simple projects using React JS. I'm
                highly passionate about MERN Stack (MongoDB, Express JS, React JS, Node JS). I love
                to do Coding. I count myself as a hardworking person.
              </p>
              <p className="font-bold:">My Skills</p>
              <p>
                <span className="btn my-4 mx-2">HTML</span>
                <span className="btn my-4 mx-2">CSS</span>
                <span className="btn my-4 mx-2">Bootstrap</span>
                <span className="btn my-4 mx-2">Tailwind CSS</span>
                <span className="btn my-4 mx-2">JavaScript</span>
                <span className="btn my-4 mx-2">React JS</span>
                <span className="btn my-4 mx-2">Node JS</span>
                <span className="btn my-4 mx-2">Mongo DB</span>
                <span className="btn my-4 mx-2">Stripe</span>
                <span className="btn my-4 mx-2">JWT</span>
                <span className="btn my-4 mx-2">Daisy UI</span>
                <span className="btn my-4 mx-2">React Form</span>
                <span className="btn my-4 mx-2">Heroku</span>
                <span className="btn my-4 mx-2">Firebase</span>
              </p>

              <a
                target="blank"
                href="https://drive.google.com/file/d/1x7UAPvaI1qI8BP8x14B0mvN0DeCboLpq/view?usp=sharing"
                className="btn btn-primary  text-white"
              >
                Download Resume
                <FaFileDownload className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
