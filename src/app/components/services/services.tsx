import React from 'react'
import Image from 'next/image'
import { Abril_Fatface, Poppins } from "next/font/google"
import './services.css'

const Abril = Abril_Fatface({weight : '400', subsets: ["latin"]})
const poppins = Poppins({weight : '400', subsets: ['latin']})


const Services = () => {
  return (
    <div className='main-container'>
        <div className="service-panel">
        <div className='services-txt'>
            <h1 className={`${Abril.className} heading1`}>Software <br/>Development</h1>
            <p className={`${poppins.className} para1`}>We use visual elements, such as typography, color, imagery, layout, and negative space, to convey messages, establish brand identities, and enhance user experiences</p>
        </div>
        <div className='w-11/12 h-40 overflow-hidden relative'>
        <Image
        alt='visual design. hai interactive'
        src="/service_visual_design.jpg"
        fill={true}
        objectFit='cover'
        />
        </div>
        </div>
        <div className="service-panel">
        <div className='services-txt'>
            <h1 className={`${Abril.className} heading1`}>Search Engine<br/>Optimization</h1>
            <p className={`${poppins.className} para1`}>We use visual elements, such as typography, color, imagery, layout, and negative space, to convey messages, establish brand identities, and enhance user experiences</p>
        </div>
        <div className='w-11/12 h-40 overflow-hidden relative'>
        <Image
        alt='visual design. hai interactive'
        src="/service_visual_design.jpg"
        fill={true}
        objectFit='cover'
        />
        </div>
        </div>
        <div className="service-panel">
        <div className='services-txt'>
            <h1 className={`${Abril.className} heading1`}>Visual <br/>Design</h1>
            <p className={`${poppins.className} para1`}>We use visual elements, such as typography, color, imagery, layout, and negative space, to convey messages, establish brand identities, and enhance user experiences</p>
        </div>
        <div className='w-11/12 h-40 overflow-hidden relative'>
        <Image
        alt='visual design. hai interactive'
        src="/service_visual_design.jpg"
        fill={true}
        objectFit='cover'
        />
        </div>
        </div>
        <div className="service-panel">
        <div className='services-txt'>
            <h1 className={`${Abril.className} heading1`}>Digital<br/>Marketing</h1>
            <p className={`${poppins.className} para1`}>We use visual elements, such as typography, color, imagery, layout, and negative space, to convey messages, establish brand identities, and enhance user experiences</p>
        </div>
        <div className='w-11/12 h-40 overflow-hidden relative'>
        <Image
        alt='visual design. hai interactive'
        src="/service_visual_design.jpg"
        fill={true}
        objectFit='cover'
        />
        </div>
        </div>
    </div>
  )
}

export default Services