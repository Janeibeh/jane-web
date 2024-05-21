import React from 'react'
import {  BsArrowRight} from "react-icons/bs";
import Project from '../project-component/Project';

const HireMe = () => {
    return (
    <> 
        <div className="bg-black border-2 ">
            <div className=" py-5 container flex flex-col items-center justify-center space-y-4 lg:space-y-3">
                <div className="text-white lg:text-2xl text-xl font-extrabold uppercase ">Why Hire Me?</div>
                <a href="#work">
                    <button className= " mt-2 py-6 relative flex items-center justify-center gap-2 tracking-wide bg-gray-200 border-bl-4 border-2 border-yellow-500 w-48 h-12 transition duration-500 ease-in hover:scale-95 hover:text-yellow-600 " >
                    Download my CV <BsArrowRight />
                            <div className="absolute h-2 w-2 -top-1 -left-1 bg-orange-400" /> 
                            <div className="absolute h-2 w-2 -bottom-1 -left-1 bg-orange-400" />
                            <div className="absolute h-2 w-2 -top-1 -right-1 bg-orange-400" />
                            <div className="absolute h-2 w-2 -bottom-1 -right-1 bg-orange-400" />
                    </button>
                </a>
            {/* <div className="text-[white] text-[1.17vw]  font-[400] w-[70vw]  " >I enjoy learning, staying on the latest trends and adapting which makes me an ideal candidate to contribute to your team.</div>    */}
            </div>
        </div>
    </>    
    )
}

export default HireMe
