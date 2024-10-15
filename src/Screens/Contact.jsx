import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { BiSend } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

const Contact = () => {

  const handleSend = (e) => {
    e.preventDefault();
  }
  return (
    <div className="display_element">
      <Navbar />
      <h1 className="animate_heading">Contact me</h1>
      <div className="pr-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.340396085073!2d66.99935485432871!3d24.956552733446273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341eb57a5dbb5%3A0xd9b55a6a8cf10044!2sK.A%20Owaisya%20Benquet!5e0!3m2!1sen!2s!4v1728896135014!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ borderRadius: "20px"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form action="" className="flex flex-col gap-4">
          <h1 className="text-3xl mt-5">Contact Form</h1>
          <p className="flex gap-2">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email Address" />
          </p>
          <textarea placeholder="Message" />
          <p className="flex justify-end">
            <button onClick={handleSend} className="text-[#eab308] flex items-center gap-1 p-3 bg-slate-700 rounded-xl hover:bg-slate-500"><IoIosSend size={20}/> Send message</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
