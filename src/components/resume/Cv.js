// const CallToAction = () => {
//   return (
//     <div className='cta'>
//         <a href={CV} download className="btn">Download CV</a>
//         <a href="#contact" className="btn btn-primary">Let's talk</a>
//     </div>
//   )
// }

// export default CallToAction

import React from 'react'
import Resume from "../../assets/Jane CV wd.pdf"
import {  BsArrowRight} from "react-icons/bs";

const Cv = () => {
  return (
    <>
      <a href={Resume}>
                    <button className= " mt-2 py-6 relative flex items-center justify-center gap-2 tracking-wide bg-gray-200 border-bl-4 border-2 border-yellow-500 w-48 h-12 transition duration-500 ease-in hover:scale-95 hover:text-yellow-600 " >
                    Download my CV <BsArrowRight />
                            <div className="absolute h-2 w-2 -top-1 -left-1 bg-orange-400" /> 
                            <div className="absolute h-2 w-2 -bottom-1 -left-1 bg-orange-400" />
                            <div className="absolute h-2 w-2 -top-1 -right-1 bg-orange-400" />
                            <div className="absolute h-2 w-2 -bottom-1 -right-1 bg-orange-400" />
                    </button>
                </a>
    </>
  )
}

export default Cv
