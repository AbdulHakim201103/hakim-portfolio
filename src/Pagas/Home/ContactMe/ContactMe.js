import React from "react";
import contact_us from "../../../Assets/image/contact_us.svg";
import admin from "../../../Assets/image/admin.png";
import address from "../../../Assets/image/address.png";
import emailAddress from "../../../Assets/image/emailAddress.png";

const ContactMe = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <img src={contact_us} alt="" />
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 class="text-5xl font-bold">Get in Touch</h1>
              <p class="py-6">
                I think you should interested on my profile and experience. Reach me given
                information below.
              </p>
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
  );
};

export default ContactMe;
