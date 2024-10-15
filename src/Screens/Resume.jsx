import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { IoLogoCss3, IoLogoJavascript, IoMdSend } from 'react-icons/io'
import { MdOutlineMenuBook } from 'react-icons/md'
import { FaBootstrap, FaComputer, FaHtml5, FaReact } from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandReactNative } from 'react-icons/tb'
import { SiMui } from 'react-icons/si'
import { IoLogoFirebase } from 'react-icons/io5'

const Resume = () => {

  const education = [
    {
      id: 1,
      course: 'Website & Mobile Application Development & Backend',
      institute: 'From Jawan Pakistan with latest updates and feature',
      year: '2024'
    },
    {
      id: 2,
      course: 'Website & Mobile Application Development',
      institute: 'From Ayan tech with latest updates and feature',
      year: '2021'
    },
    {
      id: 3,
      course: 'CIT',
      institute: 'From Buraq tech',
      year: '2021'
    },
    {
      id: 4,
      course: 'Intermediate (Pre-engineering)',
      institute: 'From Board of Intermediate Education',
      year: '2020'
    },
    {
      id: 5,
      course: 'Matric (Science)',
      institute: 'From Board of Secondary Education',
      year: '2018'
    },
    {
      id: 6,
      course: 'Associate Degree of Commerce (ADC)[Continue] ',
      institute: 'From Karachi University (Private)',
      year: '2023'
    },

  ]

  const skillsData = [
    {
      id: 1,
      skill: 'HTML5',
      icon: <FaHtml5 size={20}/>,
      Class_style: 'h-[5px] w-[90%] bg-[#eab308]'
    },
    {
      id: 2,
      skill: 'CSS',
      icon: <IoLogoCss3 size={20}/>,
      Class_style: 'h-[5px] w-[90%] bg-[#eab308]'
    },
    {
      id: 3,
      skill: 'JAVASCRIPT',
      icon: <IoLogoJavascript size={20}/>,
      Class_style: 'h-[5px] w-[70%] bg-[#eab308]'
    },
    {
      id: 4,
      skill: 'BOOTSTRAP',
      icon: <FaBootstrap size={20}/>,
      Class_style: 'h-[5px] w-[60%] bg-[#eab308]'
    },
    {
      id: 5,
      skill: 'REACT JS',
      icon: <FaReact size={20}/>,
      Class_style: 'h-[5px] w-[70%] bg-[#eab308]'
    },
    {
      id: 6,
      skill: 'FIREBASE',
      icon: <IoLogoFirebase size={20}/>,
      Class_style: 'h-[5px] w-[40%] bg-[#eab308]'
    },
    {
      id: 7,
      skill: 'MATERIAL UI',
      icon: <SiMui size={20}/>,
      Class_style: 'h-[5px] w-[50%] bg-[#eab308]'
    },
    {
      id: 8,
      skill: 'TAILWIND CSS',
      icon: <RiTailwindCssFill size={20}/>,
      Class_style: 'h-[5px] w-[50%] bg-[#eab308]'
    },
    {
      id: 9,
      skill: 'REACT NATIVE',
      icon: <TbBrandReactNative size={20}/>,
      Class_style: 'h-[5px] w-[60%] bg-[#eab308]'
    },

  ]

  return (
    <div className='display_element'>
        <Navbar/>
        <h1 className="animate_heading">Resume</h1>
        <div className='pr-10'>
          <h1 className='text-xl mb-4 flex items-center gap-2'><MdOutlineMenuBook color='#eab308'/> EDUCATION</h1>
          {
            education.map((item, index) => {
              return(
                <div key={index} className='mt-4 leading-6'>
                <p className='flex gap-2 items-center'><IoMdSend color='#eab308'/> {item.course}</p>
                <p className='text-slate-400 text-sm'>{item.institute}</p>
                <p className='text-[#eab308]'>{item.year}</p>

              </div>
              )
          })
          }
          <div>

          <h1 className='text-xl my-4 flex items-center gap-2'><FaComputer color='#eab308' /> Experience</h1>
          <p className='flex gap-2 items-center'><IoMdSend color='#eab308'/>Fintale Pvt Lmt</p>
          <p className='text-slate-400 text-sm'>I completed a Seventh-month internship as a Frontend UI Developer at a product-based company </p>
          <p className='text-slate-400 text-sm'>Assisted in the development of frontend components for web 
          applications. </p>
          <p className='text-slate-400 text-sm'>Worked closely with senior developers to learn best practices in 
          frontend development. </p>
          <p className='text-slate-400 text-sm'>Participated in team meetings and contributed ideas for improving 
          the user experience. </p>
          <p className='text-slate-400 text-sm'>Completed assigned tasks within deadlines and demonstrated a 
          willingness to learn new technologies. </p>
          </div>

          <div>
          <p className='flex gap-2 items-center mt-4'><IoMdSend color='#eab308'/>Own Experience</p>
          <p className='text-slate-400 text-sm'>I developed website clones of popular platforms like WhatsApp and YouTube, which helped me strengthen my skills in HTML5, CSS3, JavaScript, and React while ensuring cross-browser compatibility and optimal performance. </p>
          </div>

          <div>
            <h1 className='my-4 text-xl'>My SKILLS</h1>
            <div className='w-full bg-slate-700 p-6 flex flex-col gap-2 rounded-2xl'>

              {
                skillsData.map((e, i) => {
                  return(
                    <div key={i}>
                      <p className='flex gap-2 items-center'>{e.skill} {e.icon} </p>
              <div className='skill_bar_wrapper'>
                <div className={e.Class_style}></div>
              </div>
                    </div>
                  )
                })
              }
              
            </div>
          </div>


        </div>

    </div>
  )
}

export default Resume