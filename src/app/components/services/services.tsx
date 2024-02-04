import React from 'react'
import Image from 'next/image'
import './services.module.css'

const Services = () => {
  return (
    <div className='main-container'>
        <div className="service-panel">
        <div className='services-txt'>
            <h1 className='heading1'>Visual Design</h1>
            <p className='para1'>We use visual elements, such as typography, color, imagery, layout, and negative space, to convey messages, establish brand identities, and enhance user experiences</p>
        </div>
        <Image
        alt='visual design. hai interactive'
        src="/service_visual_design.jpg"
        height={300}
        />
        </div>
    </div>
  )
}

export default Services