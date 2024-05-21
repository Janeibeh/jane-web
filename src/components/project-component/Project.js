import React from 'react'
import ProjectCard from '../../cards/ProjectCard'
import { projects } from '../../data'

const Project = () => {
  return (
    <>
        <div className='bg-black px-10 flex flex-col items-center justify-center '>
            <h1 className="py-7  text-4xl lg:text-6xl tracking-wider text-gray-200 font-medium ">VIEW PROJECTS</h1>
            <div className=' py-10  mx-auto flex flex-col lg:flex-row l  items-center justify-center space-y-10  lg:space-y-0  lg:space-x-14'>
              {projects.map( (item) => (
              <ProjectCard  key={item.id}  image={item.image} link={item.link}/>
              ))}
            </div>
        </div>
    </>
  )
}

export default Project