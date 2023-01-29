import React from 'react'
import './home.css'
import {
    AiFillTwitterCircle, 
    AiFillLinkedin, 
    AiFillYoutube
  } from "react-icons/ai"

  import image from '../../assets/professional_pic.png'

const Home = () => {
  return (
    <section>
    <div className='text-center p-10'>
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">Vegas Cruz</h2>
      <h3 className="text-2xl py-2">Full Stack Developer from Michigan State University</h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-300">
        Just got my FULL Stack developer certificate from MSU. I also am a semester away from achieving my Associate&apos;s Degree in IT: Web & Software Development from Western Technical College.
      </p>
    </div>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
      <AiFillTwitterCircle/>
      <AiFillLinkedin/>
      <AiFillYoutube/>
    </div>
    <div className="relative mx-auto rounded-full">
      <img src={image} alt="pic of me" className="relative mx-auto h-full w-3/12 rounded-full"/>
    </div>
  <div className='text-center'>
    <h3 className='text-3xl py-1'> Services I offer</h3>
    <p className='text-md py-2 leading-8 text-gray-600 dark:text-gray-300'>I am a FULL Stack developer from Michigan State University. I offer front end and back end web development.</p>
  </div>
</section>
  )
}

export default Home