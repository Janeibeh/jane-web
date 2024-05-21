import React from 'react'

const Form = () => {
    return (
    <>
        <form  className='flex flex-col space-y-8  lg:mr-28 pr-28 lg:pr-0 py-6'>
            <input 
                className='bg-transparent border-b  h-12 lg:w-96 w-60 outline-none ' 
                placeholder='Name' 
                name='user_name' 
            />
            <input
                className='bg-transparent border-b  h-12 lg:w-96 w-60  outline-none'
                placeholder='Subject'
                name="subject"
            />
            <input
                className='bg-transparent border-b  h-12 lg:w-96 w-60  outline-none'
                placeholder='Email'
                name="mail"
            />
            <textarea 
                className='p-3 mt-8 border border-black bg-transparent rounded-md text-gray-100 outline-none h-1/2  ' 
                rows='5' 
                placeholder='Message' 
                name='message' 
            />
            <button className=' h-10 w-24 bg-white border rounded-lg'> Submit</button>
        </form>
    </>
    )
}

export default Form
