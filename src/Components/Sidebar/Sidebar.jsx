  import React from "react";
  import { FaFacebook, FaLinkedin, FaMapLocationDot } from "react-icons/fa6";
  import { IoIosPhonePortrait } from "react-icons/io";
  import { SiGmail } from "react-icons/si";
  import { VscGithub } from "react-icons/vsc";
  import Avatar from '../../assets/myAvatar.png'
import { Link } from "react-router-dom";

  const Sidebar = () => {
    const sidebarDetail = [
      {
        id: 1,
        icon: <SiGmail color="#fff" size={22}/>,
        label: "Email :",
        social: "shahmeerrabbani61@gmail.com",
        link: null,
      },
      {
        id: 2,
        icon: <IoIosPhonePortrait color="#fff" size={22}/>,
        label: "Phone :",
        social: "+92 317 2980810",
        link: null,
      },
      {
        id: 3,
        icon: <VscGithub color="#fff" size={22}/>,
        label: "Github :",
        social: "https://github.com/shahmeerRabbani",
        link: 'https://github.com/shahmeerRabbani'
      },
      {
        id: 4,
        icon: <FaMapLocationDot color="#fff" size={22}/>,
        label: "Location :",
        social: "Orangi Town Karachi",
        link: null,
      },
    ];

    return (
      <div className="Sidebar h-max w-[280px] bg-[#1E293B] rounded-3xl mr-5 flex flex-col items-center p-5">
        <div className="h-32 bg-[#252525] w-32 rounded-2xl overflow-hidden justify-center items-center">
          <img src={Avatar} alt="Avatar" />
        </div>
        <p className="text-xl mt-5">Shahmeer Rabbani</p>
        <span className="text-md mt-2 bg-slate-700 p-1 rounded-md text-slate-400">
          Frontend Developer
        </span>
        <hr className="w-full mt-4 border-stone-600" />
        <div>

        {sidebarDetail.map((e, i) => {
          return (
            <div className="flex gap-3 mt-3" key={i}>
              <span className="h-[45px] w-[45px] bg-[#252525] rounded-full flex justify-center items-center cursor-pointer">
                {e.icon}
              </span>
              <span className="flex flex-col" title={e.social}>
                <label htmlFor="" className="text-md">{e.label}</label>
                <a href={e.link} className="text-xs w-[180px] text-ellipsis overflow-hidden" target="blank">
                  {e.social}
                </a>
              </span>
            </div>
          );
        })}
        </div>
        <div className="flex gap-4 mt-5">
          <Link to='https://linkedin.com/in/shahmeer-rabbani-a98705251' target="blank">
          <FaLinkedin size={26} className="cursor-pointer"/>
          </Link>
          <Link to='https://github.com/shahmeerRabbani' target="blank">
          <VscGithub size={26} className="cursor-pointer"/>
          </Link>
          <FaFacebook size={26} className="cursor-pointer"/>
        </div>
      </div>
    );
  };

  export default Sidebar;
