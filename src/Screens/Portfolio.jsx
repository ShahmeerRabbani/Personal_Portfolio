import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import whatsAppClone from '../assets/whatsappClone.png'
import youtubeClone from '../assets/youtubeClone.png'
import storeImg from '../assets/storeWeb.png'
import SchoolManage from '../assets/schoolManag.png' 
import HotelManage from '../assets/hotelManag.png';

const Portfolio = () => {

  const projectData = [
    {
      id: 1,
      img: whatsAppClone,
      title: 'WhatsApp Clone',
      desc: 'Using React Js with conditional rendering wallpaper color theme',
      link: 'https://whatsapp-beta-puce.vercel.app/',
      tips: 'Self Practice',
    },
    {
      id: 2,
      img: youtubeClone,
      title: 'Youtube Clone',
      desc: 'Using React Js with conditional rendering',
      link: 'https://youtub-57476.web.app/',
      tips: 'Self Practice',
    },
    {
      id: 3,
      img: SchoolManage,
      title: 'School Management System',
      desc: 'Using React Js with nested Routing and firebase Authentication or Firebase Database as well',
      link: 'https://management-software-beta.vercel.app/',
      tips: 'Institute Assignment',
    },
    {
      id: 4,
      img: HotelManage,
      title: 'Hotel Management System',
      desc: 'Using React Js with nested Routing & Protected Route and firebase Authentication or Firebase Database as well',
      link: 'https://hotel-managment-software.vercel.app/',
      tips: 'Institute Assignments',
    },
    {
      id: 5,
      img: storeImg,
      title: 'Garment Store',
      desc: 'Using React Js with React Routing and prop drilling to get data from one and another route for add card',
      link: 'https://j-assignment-react-router.vercel.app/',
      tips: 'Institute Assignment',
    },
  ]
  
  return (
    <div className='display_element'>
        <Navbar/>
      <h1 className='animate_heading'>Portfolios</h1>
      <h1 className='mb-2 text-lg'>Some of my Assignment and Self Practice using React js </h1>
      <div className='flex flex-wrap gap-3'>
        {
          projectData.map((e, i) => {
            return(
        <div  key={i} className='portfolio_card flex gap-2 flex-col'>
          <div className='h-[70%] w-[100%] bg-slate-500 rounded-2xl overflow-hidden cursor-pointer' title={e.tips}>
            <a href={e.link} target='blank'>
            <img src={e.img} style={{width: '100%', height: '100%'}} alt=""/>
            </a>
          </div>
          <div>
            <h1 className='text-lg'>{e.title}</h1>
            <p className='text-slate-400' title={e.desc}>{e.desc.slice(0, 70)}...</p>
          </div>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Portfolio
