import React, { useRef } from "react";
import email from "../../../Assets/image/email.svg";
import emailjs from "@emailjs/browser";

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ntmmv88", "template_dfuvrtq", form.current, "6v26lo-1rIed9xZlE").then(
      (result) => {
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="">
      <div className="container mx-auto py-5">
        <div>
          <h1 className="py-20 text-5xl text-center text-primary">Message</h1>
          <div className="hero my-20">
            <div className="hero-content flex-col  lg:flex-row-reverse">
              <div className="lg:w-6/12 w-8/12 mx-10">
                <img src={email} className="" alt="" />
              </div>
              <div id="message" className="lg:w-6/12 w-8/12 mx-10">
                <div className="card bg-base-100 shadow-xl flex justify-center mx-auto">
                  <div className="card-body">
                    <h1 className="mx-auto text-primary text-2xl">Drop Me a Line</h1>
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        className="input input-bordered w-full my-3"
                        placeholder="Name"
                        type="text"
                        name="user_name"
                      />

                      <input
                        className="input input-bordered w-full my-3"
                        type="user_email"
                        placeholder="Email"
                        name="user_email"
                      />

                      <textarea
                        className="textarea textarea-bordered w-full my-3"
                        placeholder="Message"
                        name="message"
                      />
                      <input
                        className="btn btn-primary flex justify-center mx-auto w-full my-3"
                        type="submit"
                        value="Send"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
