
import React, {useEffect} from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';



const ProjectCard = (project) => {
  const {id, image,  link  } = project;

  useEffect(() => {
    AOS.init({duration : 2000});
  }, [])
  return (
    <>
        <div data-aos="fade-up" className=' border-2  w-72 h-64 lg:w-80 rounded rounded-tl-lg rounded-tr-lg'>
            <div className='flex items-center px-2 space-x-2 w-full  bg-gray-100  border  h-6 '>
                <div className='h-2 w-2 rounded-full bg-white'/>
                <div className='h-2 w-2 rounded-full bg-white'/>
                <div className='h-2 w-2 rounded-full bg-white'/>
            </div>
            <a href={link} target="_blank" rel='noreferrer'>
                <img src={image} className='overflow-hidden w-100 transition  duration-1000 ease-in hover:-translate-y-2/3' /> 
            </a>
        </div>
    </>
  )
}

export default ProjectCard
