import React from 'react'
import ProjectCard from '../../cards/ProjectCard'
import { projects } from '../../data'

const Project = () => {
  return (
    <>
        <div className='bg-black  mx-auto flex flex-col lg:flex-row l  items-center justify-center space-y-6 lg:space-x-14'>
            {projects.map( (item) => (
              <ProjectCard  key={item.id} img={item.image} link={item.link}/>
            ))}
            

                
     
        </div>
    </>
  )
}

export default Project
