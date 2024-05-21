import React, { useState } from 'react'
import HireMe from './HireMe';

const About = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleToggle = (index) => {
          setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
          };
  const accordionData = [
            { title: 'Languages ', content: 'HTML5 | CSS3 | JavaScript | TypeScript' },
            { title: 'Libraries', content: 'Bootstrap | Tailwind CSS' },
            { title: 'Frameworks', content: 'React | Nextjs | Node.js | Express Js' },
            { title: 'Databases', content: 'MongoDB | MySQL' },
            { title: 'Developer Tools', content: 'Git | Figma  | Visual Studio Code | WordPress'  },
            ];
  return (
    <>
        <div className="px-10 p-10 lg:p-20  " >
            <div className='space-y-2'>
                <h1 className="text-black text-2xl  font-extrabold hidden lg:flex">About Me. </h1>
                <h1 className="text-yellow-600 text-5xl  font-extrabold hidden lg:flex" >FULL STACK DEVELOPER</h1>
                <p className=' text-lg  '> Hello world! I am an adept Full-Stack Female Software Developer from Nigeria with a Bachelors degree in Science. My toolkit is listed below: </p>
            </div>
            {/* Accordion component begins here */}
            {accordionData.map((item, index) => (
                <div key={index} className=" w-full transition-colors duration-300 ease-in-out hover:bg-gray-800 bg-black mb-2">
                    <div className=" text-white cursor-pointer lg:text-lg  text-base px-3 lg:py-3 py-4 flex justify-between items-center"
                        onClick={() => handleToggle(index)}>
                          <span>{item.title}</span>
                          <span>{expandedIndex === index ? '-' : '+'}</span>
                    </div>
                    {expandedIndex === index && (
                          <div className=" text-white text-sm px-3 py-3 ">
                              {item.content}
                          </div>
                    )}
                </div>
            ))}
                    <HireMe/>
        </div>  


    </>
  )
}

export default About