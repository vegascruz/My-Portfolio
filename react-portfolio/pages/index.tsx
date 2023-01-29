import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillYoutube
} from "react-icons/ai"
import Image from "next/image";
import imageOfMe from '../public/img_of_me.jpg';
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] =useState(false);
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Vegas Cruz Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='text-black bg-white px-10 dark:bg-black dark:text-white'> 
          <section className="min-h-screen">
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons'>Developed by Vegas Cruz</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
                </li>
                  <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/">Home</a></li>
                  <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/About">About</a></li>
                  <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/Contact">Contact</a></li>
                  <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/Portfolio">Portfolio</a></li>
                  <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/Resume">Resume</a></li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">Vegas Cruz</h2>
              <h3 className="text-2xl py-2">Full Stack Developer from Michigan State University</h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-300">
                Just got my FULL Stack developer certificate from MSU. I also am a semester away from achieving my Associate's Degree in IT: Web & Software Development from Western Technical College.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
              <AiFillTwitterCircle/>
              <AiFillLinkedin/>
              <AiFillYoutube/>
            </div>
            <div className="relative mx-auto rounded-full">
              <Image src={imageOfMe} alt="picture of me" className="relative mx-auto rounded-"/>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1'> Services I offer</h3>
              <p className='text-md py-2 leading-8 text-gray-600 dark:text-gray-300'>I am a FULL Stack developer from Michigan State University. I offer front end and back end web development.</p>
            </div>

          </section>
        </main>
      </div>
    </>
  )
}