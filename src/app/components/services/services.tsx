"use client"
import React from 'react'
import Image from 'next/image'
import { Abril_Fatface, Poppins } from "next/font/google"
import './services.css'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Abril = Abril_Fatface({weight : '400', subsets: ["latin"]})
const poppins = Poppins({weight : '400', subsets: ['latin']})

gsap.registerPlugin(ScrollTrigger)


const Services = () => {

  useEffect(() => {
    const sections = gsap.utils.toArray(".service-panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        start : "top, center",
        markers: true,
        trigger: ".main-container",
        pin: false,
        invalidateOnRefresh: false,
        anticipatePin: 1,
        scrub: 7,
        end: "bottom top"
      }
    });
  }, []);

  return (
    <div className='main-container'>
        <div className="service-panel">
        <div className='services-txt'>
            <h1 className={`${poppins.className} heading1`}>Software <br/>Development</h1>
            <p className={`${poppins.className} para1`}>We use visual elements, such as typography, color, imagery, layout, and negative space, to convey messages, establish brand identities, and enhance user experiences</p>
        </div>
        <div className='w-[calc(100%-320px)] mx-40 h-40 overflow-hidden relative'>
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
            <h1 className={`${poppins.className} heading1`}>Search Engine<br/>Optimization</h1>
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
            <h1 className={`${poppins.className} heading1`}>Visual <br/>Design</h1>
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
            <h1 className={`${poppins.className} heading1`}>Digital<br/>Marketing</h1>
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