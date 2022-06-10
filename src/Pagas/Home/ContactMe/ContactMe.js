import React from "react";
import contact_us from "../../../Assets/image/contact_us.svg";
import admin from "../../../Assets/image/admin.png";
import address from "../../../Assets/image/address.png";
import emailAddress from "../../../Assets/image/emailAddress.png";

const ContactMe = () => {
  return (
    <div className="">
      <div className="container mx-auto py-5">
        <div>
          <h1 className="my-20 text-5xl text-center text-primary">Contact Me</h1>
          <div class="hero ">
            <div class="hero-content flex-col  lg:flex-row-reverse">
              <div className="w-6/12  mx-10">
                <img src={contact_us} class="" alt="" />
              </div>
              <div className="lg:w-6/12 ">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h1 className="text-2xl text-center text-primary">Get in Touch</h1>
                    <h1 className="my-3">I think you should interested on my profile and experience. Reach me given information below.</h1>
                    <div className="flex">
                      <div>
                        <img
                          className="rounded-full my-3 ring ring-offset-base-100 ring-offse w-12 "
                          src={admin}
                          alt=""
                        />
                      </div>
                      <div className="mx-4">
                        <h2 className="text-2xl text-primary">Name</h2>
                        <p className="text-xl">Abdul Hakim</p>
                        <p className="text-xl">Front-End Developer</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <img
                          className="rounded-full my-3 ring ring-offset-base-100 ring-offse w-12"
                          src={address}
                          alt=""
                        />
                      </div>
                      <div className="mx-4">
                        <h2 className="text-2xl text-primary">Address</h2>
                        <p className="text-xl">Bhawal, Saltha Bazar(7801),</p>
                        <p className="text-xl">Saltha, Faridpur.</p>
                        <p className="text-xl">Faridpur,Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <img
                          className="rounded-full my-3 ring ring-offset-base-100 ring-offse w-12"
                          src={emailAddress}
                          alt=""
                        />
                      </div>
                      <div className="mx-4">
                        <h2 className="text-2xl text-primary">Email & Phone</h2>
                        <p className="text-xl ">abdulhakim201103@gmail.com</p>
                        <p className="text-xl">+8801627599527</p>
                      </div>
                    </div>
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

export default ContactMe;
