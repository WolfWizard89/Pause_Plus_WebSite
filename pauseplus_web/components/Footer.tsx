import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
       <BackgroundBeamsWithCollision>
      <div className='flex flex-col justify-center items-center mt-20'>
        <h4 className='text-white-100 text-3xl'>Contact Us</h4>
        <div className='flex flex-row justify-center items-center gap-5 m-3'>
        <a href='https://www.facebook.com/profile.php?id=61572507662481' className='text-[#1877F2] text-4xl'><FaFacebook/></a>
        <a href='https://www.instagram.com/pauseplus_/' className='text-red-600 text-4xl'><FaInstagram/></a>
        <a href='mailto:pauseplus.apex@gmail.com' className='text-orange-500 text-4xl'><FaEnvelope/></a>
        </div>
        <div>
            <p className="text-white-100 text-center">
              © 2024 - 2025 PausePlus. All rights reserved.
            </p>
          </div>
      </div>
    </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Footer
