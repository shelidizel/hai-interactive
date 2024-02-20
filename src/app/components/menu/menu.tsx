import React from 'react'

const Navbar = () => {
  return (
    <div className=" mx-40 flex flex-row justify-between items-center p-12">
        <h1 className="text-5xl">HAI</h1>
        <div className=' flex '>
            <h1 className='p-8'>Home</h1>
            <h1 className='p-8'>Culture</h1>
            <h1 className='p-8'>Showcase</h1>
            <h1 className='p-8'>Contact</h1>
        </div>
    </div>
  )
}

export default Navbar