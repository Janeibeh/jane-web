import React from 'react'
import Cv from '../resume/Cv.js'

const HireMe = () => {
    return (
    <> 
        <div className="bg-black border-2 ">
            <div className=" py-5 container flex flex-col items-center justify-center space-y-4 lg:space-y-3">
                <div className="text-white lg:text-2xl text-xl font-extrabold uppercase ">Why Hire Me?</div>
                <Cv/>
            {/* <div className="text-[white] text-[1.17vw]  font-[400] w-[70vw]  " >I enjoy learning, staying on the latest trends and adapting which makes me an ideal candidate to contribute to your team.</div>    */}
            </div>
        </div>
    </>    
    )
}

export default HireMe
