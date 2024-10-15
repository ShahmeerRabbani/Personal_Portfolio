import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaFileCode } from "react-icons/fa6";
import { MdMobileFriendly } from "react-icons/md";
import { FaPencilRuler } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";

const About = () => {
  const boxObj = [
    {
      id: 1,
      title: "Web Development",
      desc: "Building interactive, responsive web applications with clean and efficient code.",
      icon: <FaFileCode size={30} color="#eab308" />,
    },
    {
      id: 2,
      title: "Continuous Learning",
      desc: "Always exploring new tools and staying current with tech trends.",
      icon: <FaPencilRuler size={30} color="#eab308" />,
    },
    {
      id: 3,
      title: "Mobile App",
      desc: "Focused on delivering fast, efficient mobile experiences that enhance user interaction.",
      icon: <MdMobileFriendly size={30} color="#eab308" />,
    },
    {
      id: 4,
      title: "User-Centered Design",
      desc: "Focused on creating intuitive, user-friendly web and mobile interfaces.",
      icon: <SiAffinitydesigner size={30} color="#eab308" />,
    },
  ];

  return (
    <div className="display_element">
      <Navbar />
      <h1 className="animate_heading">About Me</h1>
      <p className="mb-3">
        I am a passionate Frontend Developer with expertise in{" "}
        <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript (ES6+)</span>,
        and <span>React</span>. With a strong foundation in responsive web
        design, I create seamless, user-friendly interfaces that work across all
        devices. I have experience working with frameworks like{" "}
        <span>Material UI</span>, <span>Tailwind Css</span> and{" "}
        <span>Bootstrap</span> to build clean, modern web applications.
      </p>
      <p>
        My proficiency in Git for version control and a solid understanding of
        UI/UX principles help me craft high-quality, interactive web
        experiences. I thrive on solving complex problems, optimizing user
        interactions, and delivering pixel-perfect designs that align with web
        standards.
      </p>
      <h1 className="headings">
        What I'm Doing
        <VscVscodeInsiders
          color="#eab308"
          style={{ marginLeft: 10, marginTop: "2px" }}
        />
      </h1>
      <div className="box-wrapper flex flex-wrap gap-3">
        {boxObj.map((item) => {
          return (
            <div key={item.id} className="h-28 w-[45%] rounded-lg flex gap-2 justify-center items-center bg-slate-700">
              <div className=" w-16 flex justify-center items-center">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">{item.title}</span>
                <span>
                 {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
