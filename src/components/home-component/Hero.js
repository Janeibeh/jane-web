import React from 'react'
import { BsGithub, BsLinkedin , BsArrowRight} from "react-icons/bs";

const Hero = () => {
  return (
    <>

    {/* Hero desktop  */}
        <div className="bg-black hidden  lg:flex lg:px-28">
            <div className="flex container h-[33rem] uppercase mx-auto py-16 font-black ">
                <div className='flex flex-col items-start justify-start space-y-6 '>
                  <h6 className="text-white text-5xl ">Welcome to </h6>
                  <h6 className="text-yellow-600 text-6xl ">Jane Ibeh Portfolio</h6>

                  <div className="flex  space-x-7 text-4xl ml-1  "> 
                      <BsLinkedin className="text-white" />
                      <BsGithub className="text-white" />
                  </div> 
                </div>
                <div className='flex items-center justify-center w-80 h-fit ml-28' >
                    <img className="" src="./Media/jane.jpeg" alt="hero"/>
                </div>
                {/* <a href="#work">
                    <button className= "relative flex items-center justify-center gap-2 tracking-wide bg-gray-200 border-bl-4 border-2 border-yellow-500 w-48 h-12 transition duration-500 ease-in hover:scale-95 hover:text-yellow-600 " >
                            View my work <BsArrowRight />
                            <div className="absolute h-2 w-2 -top-1 -left-1 bg-orange-400" /> 
                            <div className="absolute h-2 w-2 -bottom-1 -left-1 bg-orange-400" />
                            <div className="absolute h-2 w-2 -top-1 -right-1 bg-orange-400" />
                            <div className="absolute h-2 w-2 -bottom-1 -right-1 bg-orange-400" />
                    </button>
                </a> */}
            </div>       
        </div>

    {/* Hero desktop ends here */}


    {/* Mobile Hero begins here */}
     <div className=" bg-black opacity-90 lg:hidden relative h-96  " >
          <div className='container mx-auto px-10 font-black uppercase'>
            <img className="absolute ml-1 left-24 w-72 " src="./Media/jane-hero-img-.png" alt="hero"/>
            <div className="absolute top-20  ">
              <h6 className="text-white text-[2.4rem]  ">Welcome to </h6>
              <h6 className="text-yellow-600 text-[2.4rem] ">Jane Ibeh Portfolio</h6>
              <div className="flex  space-x-7 text-3xl  ml-1  ">
                <BsLinkedin className="text-white" />
                <BsGithub className="text-white" />
              </div>
            </div>\
          </div>  
      </div>  
      {/* <div className="bg-black opacity-90 lg:hidden relative h-96">
  <div className='container mx-auto px-10 font-black uppercase'>
    <img className="ml-10 mb-4" src="./Media/jane-hero-img-.png" alt="hero"/>
    <div className="absolute top-20 left-0">
      <h6 className="text-white text-[2.4rem] mb-2">Welcome to</h6>
      <h6 className="text-yellow-600 text-[2.4rem] mb-2">Jane Ibeh Portfolio</h6>
      <div className="flex space-x-7 text-3xl ml-1">
        <BsLinkedin className="text-white" />
        <BsGithub className="text-white" />
      </div>
    </div>
  </div>  
</div>   */}

    </>
  )
}

export default Hero
