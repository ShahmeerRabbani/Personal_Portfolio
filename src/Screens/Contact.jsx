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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.7793447740826!2d67.07796506951136!3d24.950239214562792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340a6fced6fe7%3A0x942c4c61219ba360!2sPlot%20R%20236%2C%20Federal%20B%20Area%20Al%20Noor%20Society%20Block%2019%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1731047714509!5m2!1sen!2s";
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
