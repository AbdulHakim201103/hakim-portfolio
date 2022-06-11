import React from "react";
import { FaLinkedinIn, FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <div>
        <footer className="footer  p-10 bg-accent text-white">
          <div className="mx-auto">
            <p className="text-xl">Copyright &copy; {year} - All right reserved</p>
          </div>
          <div className="mx-auto">
            <div className="grid grid-flow-col gap-5">
              <a target="blank" href="https://www.linkedin.com/in/abdul-hakim-mia">
                <FaLinkedinIn className="fill-current  text-blue-700 text-2xl" />
              </a>
              <a target="blank" href="https://github.com/AbdulHakim201103">
                <FaGithub className="fill-current text-white text-2xl" />
              </a>
              <a target="blank" href="https://www.youtube.com/channel/UCirlCrLzX9dQJP-2pFfnTCQ">
                <FaYoutube className="fill-current text-red-700 text-2xl" />
              </a>
              <a target="blank" href="https://www.facebook.com/ahmleon551">
                <FaFacebookF className="fill-current  text-blue-700 text-2xl" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
