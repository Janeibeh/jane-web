import React from 'react'
import { FcCallback } from 'react-icons/fc';
import { SiGmail } from 'react-icons/si';
import { ImLocation } from 'react-icons/im';
import Form from './Form';


const Contact = () => {
  return (
    <div  className='mt-10 bg-yellow-600  py-10 px-1 '>
        <div className=' py-5  border-y border-y-black  lg:w-3/4 flex  flex-col md:flex-row items-center justify-between mx-auto container '>
          <div className='lg:mr-0 mr-48 text-white lg:pb-44 lg:pl-6 pl-10'>
            <p className='text-3xl font-semibold mt-7'>Got an idea?</p>
            <p className='text-xl mt-8'>Reach out to me.</p>
            <div className='mt-14 pl-4'>
            <div className='flex items-center'>
              <FcCallback  className='text-black' />
              <p className='ml-4'>+234 810 334 9177</p>
            </div>
            <div className='mt-10 flex items-center'>
              <SiGmail className='text-black' />
              <p className='ml-4'>janewhite.ji@gmail.com</p>
            </div>
            <div className='mt-10 flex items-center'>
              <ImLocation className='text-black' />
              <p className='ml-4'>Eko pearl, victoria island, Lagos, Nigeria</p>
            </div>
          </div>
          </div> 
          <Form/>
        </div>
            
    </div>

   

    //   <div id='contact' className='px-2 md:px-10 lg:px-28 xl:px-44 py-10 bg-gray-900'>
    //   <div className='py-10 border-y border-gray-100 '> 
    //     <div className='text-white w-full pb-14 md:pb-0'>
    //       <div>
    //         <h1 className='text-3xl font-semibold'>Got an idea?</h1>
    //         <p className='text-xl mt-8'>Reach out to me.</p>
    //       </div>
    //       <div className='mt-14'>
    //         <div className='flex items-center'>
    //           <FcCallback className='text-blue-400' />
    //           <p className='ml-4'>+234 817 260 4667</p>
    //         </div>
    //         <div className='mt-10 flex items-center'>
    //           <SiGmail className='text-blue-400' />
    //           <p className='ml-4'>jefferyjohnnmose@gmail.com</p>
    //         </div>
    //         <div className='mt-10 flex items-center'>
    //           <ImLocation className='text-blue-400' />
    //           <p className='ml-4'>ibeju-lekki Lagos, Nigeria</p>
    //         </div>
    //       </div>
    //     </div>

    //   </div> 
    // </div>

  )
}

export default Contact
